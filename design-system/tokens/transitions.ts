/**
 * Transition & Animation Tokens for AUTONOM.IA Design System
 * Consistent animation timing for smooth UX
 */

export const transitions = {
  // Durations
  duration: {
    fastest: '75ms',
    faster: '100ms',
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
  },

  // Easing functions
  easing: {
    // Standard easing
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Specific easing curves
    easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',

    easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

    // Spring-like easing
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',

    // Material Design easing
    standard: 'cubic-bezier(0.4, 0, 0.6, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  },

  // Preset transitions
  transition: {
    // Color transitions
    colors: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Shadow transitions
    shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Transform transitions
    transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Opacity transitions
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // All properties
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Button state changes
    button: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Hover state
    hover: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Focus state
    focus: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Fade in/out
    fadeIn: 'opacity 300ms cubic-bezier(0, 0, 0.2, 1)',
    fadeOut: 'opacity 200ms cubic-bezier(0.4, 0, 1, 1)',

    // Slide
    slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Scale
    scale: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Keyframe animations
  keyframes: {
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    slideIn: {
      from: { transform: 'translateY(10px)', opacity: '0' },
      to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideOut: {
      from: { transform: 'translateY(0)', opacity: '1' },
      to: { transform: 'translateY(10px)', opacity: '0' },
    },
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: '1' },
      to: { transform: 'scale(0.95)', opacity: '0' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
} as const;

export type Transitions = typeof transitions;
export type TransitionKey = keyof (typeof transitions)['transition'];
export type EasingKey = keyof (typeof transitions)['easing'];
export type DurationKey = keyof (typeof transitions)['duration'];
