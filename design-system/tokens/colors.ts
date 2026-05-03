/**
 * Color Tokens for AUTONOM.IA Design System
 * Executive Neural Interface - Dark theme with Electric Orange primary
 */

export const colors = {
  // Primitives
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Surface Palette (Tonal Layers)
  surface: '#111317',
  'surface-dim': '#111317',
  'surface-bright': '#37393e',
  'surface-container-lowest': '#0c0e12',
  'surface-container-low': '#1a1c20',
  'surface-container': '#1e2024',
  'surface-container-high': '#282a2e',
  'surface-container-highest': '#333539',
  'on-surface': '#e2e2e8',
  'on-surface-variant': '#e4beb1',
  'inverse-surface': '#e2e2e8',
  'inverse-on-surface': '#2f3035',
  'surface-variant': '#333539',
  'surface-tint': '#ffb59a',

  // Primary - Electric Orange
  primary: '#ffb59a',
  'on-primary': '#5a1b00',
  'primary-container': '#ff5c00',
  'on-primary-container': '#521800',
  'inverse-primary': '#a73a00',
  'primary-fixed': '#ffdbce',
  'primary-fixed-dim': '#ffb59a',
  'on-primary-fixed': '#370e00',
  'on-primary-fixed-variant': '#802a00',

  // Secondary - Neon Green
  secondary: '#d7ffc5',
  'on-secondary': '#053900',
  'secondary-container': '#2ff801',
  'on-secondary-container': '#0f6d00',
  'secondary-fixed': '#79ff5b',
  'secondary-fixed-dim': '#2ae500',
  'on-secondary-fixed': '#022100',
  'on-secondary-fixed-variant': '#095300',

  // Tertiary - Royal Blue
  tertiary: '#b9c3ff',
  'on-tertiary': '#00228a',
  'tertiary-container': '#718aff',
  'on-tertiary-container': '#001e7e',
  'tertiary-fixed': '#dde1ff',
  'tertiary-fixed-dim': '#b9c3ff',
  'on-tertiary-fixed': '#001257',
  'on-tertiary-fixed-variant': '#0033c0',

  // Error
  error: '#ffb4ab',
  'on-error': '#690005',
  'error-container': '#93000a',
  'on-error-container': '#ffdad6',

  // Outline
  outline: '#ab897d',
  'outline-variant': '#5b4137',

  // Background
  background: '#111317',
  'on-background': '#e2e2e8',

  // Semantic aliases for compatibility
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    150: '#EDEDF0',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // State colors
  state: {
    hover: 'rgba(255, 181, 154, 0.08)',
    focus: 'rgba(255, 92, 0, 0.2)',
    active: 'rgba(255, 92, 0, 0.12)',
    disabled: 'rgba(255, 181, 154, 0.2)',
  },

  // Semantic aliases
  background: {
    primary: '#111317',
    secondary: '#1a1c20',
    tertiary: '#1e2024',
  },

  text: {
    primary: '#e2e2e8',
    secondary: '#e4beb1',
    tertiary: '#ab897d',
    inverse: '#111317',
  },

  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.08)',
    dark: 'rgba(255, 255, 255, 0.05)',
  },
} as const;

export type Color = typeof colors;
export type ColorKey = keyof Color;
