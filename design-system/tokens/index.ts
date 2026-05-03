/**
 * Design System Tokens - Central Export
 * All design tokens for AUTONOM.IA are defined and re-exported here
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './shadows';
export * from './transitions';

// Convenience re-export
export {
  colors,
  type Color,
  type ColorKey,
  type PrimaryColor,
} from './colors';

export {
  typography,
  type Typography,
  type TypographyScale,
  type TypographySize,
} from './typography';

export {
  spacing,
  type Spacing,
  type SpacingKey,
} from './spacing';

export {
  radius,
  type Radius,
  type RadiusKey,
} from './radius';

export {
  shadows,
  type Shadows,
  type ShadowKey,
} from './shadows';

export {
  transitions,
  type Transitions,
  type TransitionKey,
  type EasingKey,
  type DurationKey,
} from './transitions';
