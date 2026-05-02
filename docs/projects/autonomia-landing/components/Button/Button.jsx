/* global React */
/**
 * Button — AUTONOMIA Design System
 *
 * Atomic component covering all interactive button needs.
 * Production-ready: WCAG 2.2 AA, all states, all sizes, all variants.
 *
 * @example
 *   <Button variant="primary" size="md" arrow>Agendar diagnóstico</Button>
 *   <Button variant="accent" loading>Enviando...</Button>
 *   <Button as="a" href="/diag" variant="primary">Como link</Button>
 */

const VALID_VARIANTS = ['primary', 'secondary', 'tertiary', 'accent', 'ghost'];
const VALID_SIZES = ['sm', 'md', 'lg'];

function Button(props) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    onDark = false,
    block = false,
    arrow = false,
    play = false,
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    type = 'button',
    as = 'button',
    className = '',
    'aria-label': ariaLabel,
    onClick,
    href,
    ...rest
  } = props;

  // Validation (production: would use prop-types or TS)
  if (!VALID_VARIANTS.includes(variant)) {
    console.warn(`Button: invalid variant "${variant}". Use one of: ${VALID_VARIANTS.join(', ')}`);
  }
  if (!VALID_SIZES.includes(size)) {
    console.warn(`Button: invalid size "${size}". Use one of: ${VALID_SIZES.join(', ')}`);
  }

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    onDark && 'btn--on-dark',
    block && 'btn--block',
    loading && 'btn--loading',
    className
  ].filter(Boolean).join(' ');

  const isDisabled = disabled || loading;

  // Shared content
  const content = (
    <>
      {leftIcon && <span className="btn__icon btn__icon--left" aria-hidden="true">{leftIcon}</span>}
      {play && (
        <span className="btn__play" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <path d="M2 1.5v7l6-3.5z" />
          </svg>
        </span>
      )}
      <span className="btn__label">{children}</span>
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28 28" strokeLinecap="round" />
          </svg>
        </span>
      )}
      {arrow && !loading && (
        <span className="btn__arrow" aria-hidden="true">
          <svg viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
          </svg>
        </span>
      )}
      {rightIcon && !arrow && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">{rightIcon}</span>
      )}
    </>
  );

  // Render as <a> if href provided
  if (as === 'a' || href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        role={isDisabled ? 'link' : undefined}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  // Default: <button>
  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}

window.Button = Button;
