/**
 * Typography Tokens for AUTONOM.IA Design System
 * Responsive font scales with WCAG AAA contrast
 */

export const typography = {
  // Font families
  fontFamily: {
    manrope: ['Manrope', 'sans-serif'].join(', '),
    inter: ['Inter', 'sans-serif'].join(', '),
    sans: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
    ].join(', '),
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      '"SF Mono"',
      'Menlo',
      'Consolas',
      '"Liberation Mono"',
      'monospace',
    ].join(', '),
  },

  // Font sizes (in pixels)
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '40px',
    '6xl': '48px',
    '7xl': '56px',
  } as const,

  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  } as const,

  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  } as const,

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  } as const,

  // Typography scales for different use cases
  scales: {
    // Display (page titles, marketing)
    display: {
      lg: {
        fontSize: '48px',
        lineHeight: '60px',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      md: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      sm: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
    },

    // Heading (section titles)
    heading: {
      lg: {
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      md: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      sm: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      xs: {
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: 700,
        letterSpacing: '0em',
      },
    },

    // Subheading
    subheading: {
      lg: {
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: 600,
        letterSpacing: '0em',
      },
      md: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 600,
        letterSpacing: '0em',
      },
      sm: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 600,
        letterSpacing: '0em',
      },
    },

    // Body (main content)
    body: {
      lg: {
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
      md: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
      sm: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
      xs: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
    },

    // Label (form labels, UI text)
    label: {
      lg: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        letterSpacing: '0em',
      },
      md: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        letterSpacing: '0em',
      },
      sm: {
        fontSize: '11px',
        lineHeight: '14px',
        fontWeight: 500,
        letterSpacing: '0.05em',
      },
    },

    // Caption (help text, secondary information)
    caption: {
      md: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
      sm: {
        fontSize: '11px',
        lineHeight: '14px',
        fontWeight: 400,
        letterSpacing: '0em',
      },
    },

    // Code (monospace)
    code: {
      md: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        fontFamily: 'monospace',
        letterSpacing: '0em',
      },
      sm: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        fontFamily: 'monospace',
        letterSpacing: '0em',
      },
    },
  },
} as const;

export type Typography = typeof typography;
export type TypographyScale = keyof (typeof typography)['scales'];
export type TypographySize = 'sm' | 'md' | 'lg' | 'xl' | 'xs' | undefined;
