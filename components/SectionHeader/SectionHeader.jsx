/* global React */
/**
 * SectionHeader — AUTONOMIA Design System (Molecule)
 *
 * Composes Eyebrow + Heading + Lede in the standard pattern that appears
 * 9 times in variation-a: section intros, hero secondaries, FAQ headers, etc.
 *
 * Replaces the .a-section-tag + .a-section-title + p pattern.
 *
 * @example
 *   <SectionHeader
 *     eyebrow="O método"
 *     title={<>Não é um curso. É uma <em>travessia</em>.</>}
 *     description="A IA não é tendência. É infraestrutura..."
 *   />
 *
 *   <SectionHeader
 *     layout="split"
 *     eyebrow="A jornada"
 *     title={<>Cinco encontros. Uma <em>nova operação</em>.</>}
 *     description="Cada encontro é uma estação de travessia..."
 *   />
 *
 *   <SectionHeader
 *     align="center"
 *     tone="dark"
 *     eyebrow="Próximo passo"
 *     eyebrowTone="accent"
 *     title={<>Pronto para <em>orquestrar</em>?</>}
 *   />
 */

const VALID_LAYOUTS = ['stack', 'split'];
const VALID_ALIGNS = ['start', 'center', 'end'];
const VALID_TONES = ['default', 'dark'];

function SectionHeader(props) {
  // Bind atomic components at render time
  const { Eyebrow, Heading, Lede } = window;

  const {
    eyebrow,
    title,
    description,
    level = 2,
    visualSize,
    layout = 'stack',
    align = 'start',
    tone = 'default',
    withDash = true,
    eyebrowTone,
    actions,
    id,
    className = '',
    children,
    ...rest
  } = props;

  if (!VALID_LAYOUTS.includes(layout)) {
    console.warn(`SectionHeader: invalid layout "${layout}".`);
  }
  if (!VALID_ALIGNS.includes(align)) {
    console.warn(`SectionHeader: invalid align "${align}".`);
  }
  if (!VALID_TONES.includes(tone)) {
    console.warn(`SectionHeader: invalid tone "${tone}".`);
  }

  const titleId = id ? `${id}-title` : undefined;

  const classes = [
    'section-header',
    `section-header--${layout}`,
    `section-header--align-${align}`,
    `section-header--tone-${tone}`,
    className
  ].filter(Boolean).join(' ');

  // Resolve tones based on parent tone
  const resolvedEyebrowTone = eyebrowTone || (tone === 'dark' ? 'on-dark-soft' : 'secondary');
  const resolvedTitleTone = tone === 'dark' ? 'on-dark' : 'default';
  const resolvedDescTone = tone === 'dark' ? 'on-dark-soft' : 'secondary';

  // Composition mode
  if (children) {
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }

  // Prop-driven mode
  return (
    <div className={classes} {...rest}>
      <div className="section-header__lead">
        {eyebrow && (
          <Eyebrow withDash={withDash} tone={resolvedEyebrowTone}>
            {eyebrow}
          </Eyebrow>
        )}
        {title && (
          <Heading
            level={level}
            visualSize={visualSize}
            tone={resolvedTitleTone}
            id={titleId}
            className="section-header__title"
          >
            {title}
          </Heading>
        )}
      </div>

      {(description || actions) && (
        <div className="section-header__support">
          {description && (
            <Lede tone={resolvedDescTone} className="section-header__description">
              {description}
            </Lede>
          )}
          {actions && (
            <div className="section-header__actions">
              {actions}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

window.SectionHeader = SectionHeader;
