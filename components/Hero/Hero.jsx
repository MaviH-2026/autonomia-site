/* global React */
/**
 * Hero — AUTONOMIA Design System (Organism)
 *
 * First organism: composes Display + Lede + Buttons + Media slot.
 * Replaces the .a-hero markup pattern from variation-a.
 *
 * Two API styles supported:
 *  1. PROP-DRIVEN (concise, for standard heros)
 *  2. COMPOSITION (children, for custom layouts)
 *
 * @example Prop-driven
 *   <Hero
 *     eyebrow="Mentoria executiva · 2026"
 *     title={<>Forme-se como o <em>líder orquestrador</em></>}
 *     description="Não é um curso. É uma travessia..."
 *     primaryAction={{ label: 'Agendar diagnóstico', href: '#diag' }}
 *     secondaryAction={{ label: 'Ver método', href: '#metodo', play: true }}
 *     media={<HeroPortrait src="igor.png" alt="..." />}
 *   />
 *
 * @example Composition
 *   <Hero layout="split">
 *     <Hero.Body>
 *       <Eyebrow>Mentoria executiva · 2026</Eyebrow>
 *       <Display>Forme-se como o <em>líder orquestrador</em></Display>
 *       <Lede>Não é um curso...</Lede>
 *       <Hero.Actions>
 *         <Button variant="primary" arrow>Agendar</Button>
 *         <Button variant="secondary" play>Ver método</Button>
 *       </Hero.Actions>
 *     </Hero.Body>
 *     <Hero.Media>
 *       <HeroPortrait src="igor.png" alt="..." />
 *     </Hero.Media>
 *   </Hero>
 */

const VALID_LAYOUTS = ['split', 'centered', 'stacked'];
const VALID_TONES = ['default', 'dark'];

function Hero(props) {
  // Bind atomic components at render time
  const { Button, Eyebrow, Display, Lede } = window;

  const {
    layout = 'split',
    tone = 'default',
    eyebrow,
    title,
    description,
    primaryAction,
    secondaryAction,
    media,
    children,
    as = 'header',
    className = '',
    ...rest
  } = props;

  if (!VALID_LAYOUTS.includes(layout)) {
    console.warn(`Hero: invalid layout "${layout}". Use one of: ${VALID_LAYOUTS.join(', ')}`);
  }
  if (!VALID_TONES.includes(tone)) {
    console.warn(`Hero: invalid tone "${tone}". Use one of: ${VALID_TONES.join(', ')}`);
  }

  const Tag = as;
  const classes = [
    'hero',
    `hero--${layout}`,
    `hero--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  // Composition mode: render children directly
  if (children) {
    return <Tag className={classes} {...rest}>{children}</Tag>;
  }

  // Prop-driven mode: build the structure
  const renderAction = (action, defaultVariant) => {
    if (!action) return null;
    if (React.isValidElement(action)) return action;
    const { label, href, variant = defaultVariant, ...actionRest } = action;
    return (
      <Button
        as={href ? 'a' : 'button'}
        href={href}
        variant={variant}
        {...actionRest}
      >
        {label}
      </Button>
    );
  };

  return (
    <Tag className={classes} {...rest}>
      <HeroBody>
        {eyebrow && (
          <Eyebrow tone={tone === 'dark' ? 'on-dark-soft' : 'secondary'}>
            {eyebrow}
          </Eyebrow>
        )}
        {title && (
          <Display tone={tone === 'dark' ? 'on-dark' : 'default'}>
            {title}
          </Display>
        )}
        {description && (
          <Lede tone={tone === 'dark' ? 'on-dark-soft' : 'secondary'}>
            {description}
          </Lede>
        )}
        {(primaryAction || secondaryAction) && (
          <HeroActions>
            {renderAction(primaryAction, 'primary')}
            {renderAction(secondaryAction, 'secondary')}
          </HeroActions>
        )}
      </HeroBody>
      {media && layout !== 'centered' && layout !== 'stacked' && (
        <HeroMedia>{media}</HeroMedia>
      )}
    </Tag>
  );
}

/* ─────────────────────────────────────────────────────
   Hero.Body — content column
   ───────────────────────────────────────────────────── */
function HeroBody({ children, className = '', ...rest }) {
  return (
    <div className={`hero__body ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Hero.Actions — CTA group
   ───────────────────────────────────────────────────── */
function HeroActions({ children, className = '', ...rest }) {
  return (
    <div className={`hero__actions ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Hero.Media — media column
   ───────────────────────────────────────────────────── */
function HeroMedia({ children, className = '', ...rest }) {
  return (
    <div className={`hero__media ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   HeroPortrait — Common media pattern
   Image + gradient overlay + caption + optional play button
   ───────────────────────────────────────────────────── */
function HeroPortrait(props) {
  const {
    src,
    alt,
    caption,        // { name, role }
    action,         // { label, onClick, href, play }
    aspectRatio = '4/5',
    className = '',
    ...rest
  } = props;

  const classes = [
    'hero-portrait',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{ aspectRatio }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        className="hero-portrait__img"
      />
      {caption && (
        <div className="hero-portrait__caption">
          {caption.name && (
            <div className="hero-portrait__name">{caption.name}</div>
          )}
          {caption.role && (
            <div className="hero-portrait__role">{caption.role}</div>
          )}
        </div>
      )}
      {action && (
        <div className="hero-portrait__action">
          {React.isValidElement(action) ? action : (
            <Button
              as={action.href ? 'a' : 'button'}
              href={action.href}
              onClick={action.onClick}
              variant="secondary"
              play={action.play}
              size={action.size || 'md'}
              aria-label={action.ariaLabel}
            >
              {action.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Attach sub-components
   ───────────────────────────────────────────────────── */
Hero.Body = HeroBody;
Hero.Actions = HeroActions;
Hero.Media = HeroMedia;
Hero.Portrait = HeroPortrait;

window.Hero = Hero;
window.HeroPortrait = HeroPortrait;
