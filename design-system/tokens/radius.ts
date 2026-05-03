/**
 * Border Radius Tokens for AUTONOM.IA Design System
 */

export const radius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  full: '9999px',

  // Component aliases
  button: '6px',
  input: '6px',
  card: '12px',
  modal: '12px',
  tooltip: '6px',
  avatar: '8px',
  badge: '4px',
} as const;

export type Radius = typeof radius;
export type RadiusKey = keyof Radius;
