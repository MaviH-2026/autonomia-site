/* global React */
/**
 * Typography — AUTONOMIA Design System
 *
 * Atomic components for all text needs. Decouples semantic level
 * (h1, h2, p) from visual size (display, body, lede), so you can
 * have an h1 sized like h2 when needed.
 *
 * Components:
 *  - <Display>     — Hero displays (--fs-display fluid 48-84px)
 *  - <Heading>     — H1-H4 with level prop (semantic + visual)
 *  - <Lede>        — Lead paragraphs (--fs-lede fluid 16-18px)
 *  - <Body>        — Default body text (--fs-body fluid 15-16px)
 *  - <Eyebrow>     — Mono uppercase labels (--fs-eyebrow 12px)
 *  - <Quote>       — Blockquote for pull quotes
 *  - <Mono>        — Inline monospace (meta, dates, codes)
 *
 * @example
 *   <Display>Forme-se como o <em>líder orquestrador</em></Display>
 *   <Heading level={2}>Não é um curso. É uma <em>travessia</em>.</Heading>
 *   <Lede>Cinco encontros 1:1 para você sair...</Lede>
 *   <Body tone="secondary">Texto secundário...</Body>
 *   <Eyebrow tone="accent">01 · Tecnologia</Eyebrow>
 *   <Eyebrow withDash>Por que agora</Eyebrow>
 *   <Quote attribution="Igor Drews">A tecnologia não é a estrela.</Quote>
 *   <Mono>autonomiadigital.ia.br</Mono>
 */

const VALID_TONES = ['default', 'secondary', 'muted', 'accent', 'on-dark', 'on-dark-soft'];

/* ─────────────────────────────────────────────────────
   Display — Hero displays (fs-display)
   ───────────────────────────────────────────────────── */
function Display(props) {
  const {
    children,
    tone = 'default',
    as = 'h1',
    balance = true,
    className = '',
    ...rest
  } = props;

  const Tag = as;
  const classes = [
    'typo-display',
    `typo--tone-${tone}`,
    balance && 'typo--balance',
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Heading — H1-H4 (level decouples semantic from visual)
   ───────────────────────────────────────────────────── */
function Heading(props) {
  const {
    children,
    level = 2,
    as,
    visualSize,
    tone = 'default',
    balance = true,
    className = '',
    ...rest
  } = props;

  const Tag = as || `h${level}`;
  const sizeClass = `typo-h${visualSize || level}`;
  const classes = [
    'typo-heading',
    sizeClass,
    `typo--tone-${tone}`,
    balance && 'typo--balance',
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Lede — Lead paragraph
   ───────────────────────────────────────────────────── */
function Lede(props) {
  const {
    children,
    tone = 'secondary',
    as = 'p',
    className = '',
    ...rest
  } = props;

  const Tag = as;
  const classes = [
    'typo-lede',
    `typo--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Body — Body text
   ───────────────────────────────────────────────────── */
function Body(props) {
  const {
    children,
    tone = 'default',
    size = 'md',
    as = 'p',
    className = '',
    ...rest
  } = props;

  const Tag = as;
  const classes = [
    'typo-body',
    `typo-body--${size}`,
    `typo--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Eyebrow — Mono uppercase label
   ───────────────────────────────────────────────────── */
function Eyebrow(props) {
  const {
    children,
    tone = 'secondary',
    withDash = false,
    as = 'span',
    className = '',
    ...rest
  } = props;

  const Tag = as;
  const classes = [
    'typo-eyebrow',
    `typo--tone-${tone}`,
    withDash && 'typo-eyebrow--with-dash',
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Quote — Blockquote for pull quotes
   ───────────────────────────────────────────────────── */
function Quote(props) {
  const {
    children,
    attribution,
    tone = 'default',
    showMark = false,
    className = '',
    ...rest
  } = props;

  const classes = [
    'typo-quote',
    `typo--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <figure className={classes} {...rest}>
      <blockquote className="typo-quote__text">
        {showMark && <span className="typo-quote__mark" aria-hidden="true">"</span>}
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="typo-quote__attr">{attribution}</figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────────────
   Mono — Inline monospace
   ───────────────────────────────────────────────────── */
function Mono(props) {
  const {
    children,
    tone = 'muted',
    as = 'span',
    className = '',
    ...rest
  } = props;

  const Tag = as;
  const classes = [
    'typo-mono',
    `typo--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes} {...rest}>{children}</Tag>;
}

/* ─────────────────────────────────────────────────────
   Exports
   ───────────────────────────────────────────────────── */
window.Typography = {
  Display,
  Heading,
  Lede,
  Body,
  Eyebrow,
  Quote,
  Mono
};

// Also expose individually for direct destructure
window.Display = Display;
window.Heading = Heading;
window.Lede = Lede;
window.Body = Body;
window.Eyebrow = Eyebrow;
window.Quote = Quote;
window.Mono = Mono;
