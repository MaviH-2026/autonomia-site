/* global React */
/**
 * Faq — AUTONOMIA Design System
 *
 * Accordion component following WAI-ARIA 1.2 Accordion Pattern.
 * https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
 *
 * Keyboard interactions (full pattern):
 *  - Enter/Space   → Toggle current item
 *  - Arrow Down    → Focus next header (wraps to first)
 *  - Arrow Up      → Focus previous header (wraps to last)
 *  - Home          → Focus first header
 *  - End           → Focus last header
 *  - Tab           → Standard tab order (skips collapsed panels)
 *
 * @example
 *   // Composable API
 *   <Faq>
 *     <Faq.Item question="Q1">A1</Faq.Item>
 *     <Faq.Item question="Q2">A2</Faq.Item>
 *   </Faq>
 *
 *   // Data-driven API
 *   <Faq items={[{q: 'Q1', a: 'A1'}]} />
 */

const FaqContext = React.createContext(null);

function Faq(props) {
  const {
    items,
    children,
    defaultOpen = 0,           // index of initially-open item, or null
    multiple = false,           // allow multiple panels open simultaneously
    onChange,
    headingLevel = 3,           // semantic heading level (h2-h6)
    className = '',
    'aria-label': ariaLabel = 'Perguntas frequentes',
    ...rest
  } = props;

  // Normalize state: array of open indices
  const initialOpen = multiple
    ? (Array.isArray(defaultOpen) ? defaultOpen : (defaultOpen != null ? [defaultOpen] : []))
    : (defaultOpen != null ? [defaultOpen] : []);

  const [openIndices, setOpenIndices] = React.useState(initialOpen);
  const headerRefs = React.useRef([]);

  // Resolve items (accept both data array and JSX children)
  const resolvedItems = items
    || React.Children.toArray(children).filter(c =>
      React.isValidElement(c) && c.type === FaqItem
    ).map((c, i) => ({
      q: c.props.question,
      a: c.props.children,
      _key: c.key ?? i
    }));

  const toggle = (index) => {
    setOpenIndices(prev => {
      const isOpen = prev.includes(index);
      let next;
      if (multiple) {
        next = isOpen ? prev.filter(i => i !== index) : [...prev, index];
      } else {
        next = isOpen ? [] : [index];
      }
      onChange?.(next);
      return next;
    });
  };

  // Keyboard navigation per WAI-ARIA Accordion Pattern
  const handleKeyDown = (e, index) => {
    const total = resolvedItems.length;
    let nextIndex = null;

    switch (e.key) {
      case 'ArrowDown':
        nextIndex = (index + 1) % total;
        break;
      case 'ArrowUp':
        nextIndex = (index - 1 + total) % total;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = total - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    headerRefs.current[nextIndex]?.focus();
  };

  const contextValue = {
    openIndices,
    toggle,
    handleKeyDown,
    headerRefs,
    headingLevel
  };

  return (
    <FaqContext.Provider value={contextValue}>
      <div
        className={`faq ${className}`}
        role="region"
        aria-label={ariaLabel}
        {...rest}
      >
        {items
          ? items.map((item, i) => (
              <FaqItem
                key={item._key ?? i}
                question={item.q ?? item.question}
                index={i}
              >
                {item.a ?? item.answer}
              </FaqItem>
            ))
          : React.Children.map(children, (child, i) =>
              React.isValidElement(child) && child.type === FaqItem
                ? React.cloneElement(child, { index: i })
                : child
            )
        }
      </div>
    </FaqContext.Provider>
  );
}

/* ─── FaqItem (composable child) ─── */

function FaqItem(props) {
  const { question, children, index } = props;
  const ctx = React.useContext(FaqContext);

  if (!ctx) {
    console.error('Faq.Item must be used inside <Faq>');
    return null;
  }

  const { openIndices, toggle, handleKeyDown, headerRefs, headingLevel } = ctx;
  const isOpen = openIndices.includes(index);
  const headerId = `faq-header-${index}`;
  const panelId = `faq-panel-${index}`;
  const HeadingTag = `h${headingLevel}`;

  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <HeadingTag className="faq__heading">
        <button
          ref={el => (headerRefs.current[index] = el)}
          className="faq__trigger"
          onClick={() => toggle(index)}
          onKeyDown={e => handleKeyDown(e, index)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={headerId}
          type="button"
        >
          <span className="faq__question">{question}</span>
          <span className="faq__indicator" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d={isOpen ? 'M2 7h10' : 'M7 2v10M2 7h10'}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </button>
      </HeadingTag>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="faq__panel"
        hidden={!isOpen}
      >
        <div className="faq__answer">
          {children}
        </div>
      </div>
    </div>
  );
}

Faq.Item = FaqItem;

window.Faq = Faq;
