/**
 * Spacing Tokens for AUTONOM.IA Design System
 * 8px base scale for consistent alignment and padding
 */

export const spacing = {
  // Base 8px scale
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',

  // Common aliases
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',

  // Gaps (for flex/grid)
  gapXs: '4px',
  gapSm: '8px',
  gapMd: '16px',
  gapLg: '24px',
  gapXl: '32px',

  // Paddings (common combinations)
  padXs: '4px',
  padSm: '8px',
  padMd: '16px',
  padLg: '24px',
  padXl: '32px',

  // Margins (common combinations)
  marginXs: '4px',
  marginSm: '8px',
  marginMd: '16px',
  marginLg: '24px',
  marginXl: '32px',

  // Component padding defaults
  component: {
    button: {
      paddingX: '16px',
      paddingY: '10px',
    },
    input: {
      paddingX: '12px',
      paddingY: '8px',
    },
    card: {
      padding: '24px',
    },
  },
} as const;

export type Spacing = typeof spacing;
export type SpacingKey = keyof Spacing;
