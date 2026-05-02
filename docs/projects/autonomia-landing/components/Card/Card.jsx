/* global React */
/**
 * Card — AUTONOMIA Design System
 *
 * Consolidates 4 patterns from landing v1 into 1 component:
 *  - .a-pillar     (3 instances) → variant="numbered"
 *  - .a-module     (5 instances) → variant="numbered" + meta
 *  - .a-stat       (4 instances) → variant="stat"
 *  - .a-diag-feature (3 instances) → variant="feature"
 *  Total: 15 instances → 1 component
 *
 * Plus generic 'default' variant for arbitrary content.
 *
 * @example
 *   <Card variant="numbered" eyebrow="01 · Tecnologia" title="Domínio aplicado" body="..." />
 *   <Card variant="stat" stat="30+" body="anos navegando..." source="Trajetória" />
 *   <Card variant="feature" icon={<CheckIcon/>} title="..." body="..." />
 */

const VALID_VARIANTS = ['default', 'numbered', 'stat', 'feature'];
const VALID_TONES = ['neutral', 'surface', 'elevated', 'dark'];

function Card(props) {
  const {
    variant = 'default',
    tone = 'neutral',
    eyebrow,
    title,
    body,
    meta,
    stat,
    source,
    icon,
    accentBar = false,
    interactive = false,
    href,
    onClick,
    className = '',
    children,
    as,
    ...rest
  } = props;

  if (!VALID_VARIANTS.includes(variant)) {
    console.warn(`Card: invalid variant "${variant}". Use one of: ${VALID_VARIANTS.join(', ')}`);
  }
  if (!VALID_TONES.includes(tone)) {
    console.warn(`Card: invalid tone "${tone}". Use one of: ${VALID_TONES.join(', ')}`);
  }

  const classes = [
    'card',
    `card--${variant}`,
    `card--tone-${tone}`,
    accentBar && 'card--accent-bar',
    interactive && 'card--interactive',
    className
  ].filter(Boolean).join(' ');

  // Determine root element
  const Tag = as || (href ? 'a' : (interactive ? 'button' : 'article'));
  const isInteractive = !!href || interactive;

  // Element-specific props
  const elementProps = {
    className: classes,
    ...rest
  };
  if (Tag === 'a') {
    elementProps.href = href;
  } else if (Tag === 'button') {
    elementProps.type = 'button';
    elementProps.onClick = onClick;
  }

  return (
    <Tag {...elementProps}>
      {accentBar && <span className="card__accent-bar" aria-hidden="true"></span>}

      {variant === 'feature' && (
        <CardFeature icon={icon} title={title} body={body}>
          {children}
        </CardFeature>
      )}

      {variant === 'stat' && (
        <CardStat stat={stat} body={body} source={source}>
          {children}
        </CardStat>
      )}

      {variant === 'numbered' && (
        <CardNumbered eyebrow={eyebrow} title={title} body={body} meta={meta}>
          {children}
        </CardNumbered>
      )}

      {variant === 'default' && (
        <CardDefault eyebrow={eyebrow} title={title} body={body}>
          {children}
        </CardDefault>
      )}
    </Tag>
  );
}

/* ─── Internal sub-renderers ─── */

function CardNumbered({ eyebrow, title, body, meta, children }) {
  return (
    <>
      {eyebrow && <span className="card__eyebrow">{eyebrow}</span>}
      {title && <h3 className="card__title">{title}</h3>}
      {body && <p className="card__body">{body}</p>}
      {children}
      {meta && <div className="card__meta">{meta}</div>}
    </>
  );
}

function CardStat({ stat, body, source, children }) {
  return (
    <>
      {stat && <div className="card__stat">{stat}</div>}
      {body && <p className="card__body">{body}</p>}
      {children}
      {source && <div className="card__source">{source}</div>}
    </>
  );
}

function CardFeature({ icon, title, body, children }) {
  return (
    <>
      {icon && <span className="card__icon" aria-hidden="true">{icon}</span>}
      <div className="card__content">
        {title && <strong className="card__feature-title">{title}</strong>}
        {body && <p className="card__body">{body}</p>}
        {children}
      </div>
    </>
  );
}

function CardDefault({ eyebrow, title, body, children }) {
  return (
    <>
      {eyebrow && <span className="card__eyebrow">{eyebrow}</span>}
      {title && <h3 className="card__title">{title}</h3>}
      {body && <p className="card__body">{body}</p>}
      {children}
    </>
  );
}

window.Card = Card;
