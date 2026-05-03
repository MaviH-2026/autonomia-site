'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'display' | 'heading' | 'subheading' | 'body' | 'label' | 'caption' | 'code';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'error' | 'success' | 'warning' | 'info';
  truncate?: boolean;
  lineClamp?: number;
}

const variantStyles = {
  display: 'text-5xl font-bold leading-tight',
  heading: 'text-3xl font-bold leading-tight',
  subheading: 'text-xl font-semibold leading-snug',
  body: 'text-base font-normal leading-relaxed',
  label: 'text-sm font-medium leading-snug',
  caption: 'text-xs font-normal leading-snug',
  code: 'font-mono text-sm',
};

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const weightMap = {
  100: 'font-thin',
  200: 'font-extralight',
  300: 'font-light',
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black',
};

const colorMap = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  tertiary: 'text-text-tertiary',
  inverse: 'text-text-inverse',
  error: 'text-error-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  info: 'text-info-600',
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({
    as = 'p',
    variant = 'body',
    size,
    weight,
    color = 'primary',
    truncate = false,
    lineClamp,
    className,
    children,
    ...props
  }, ref) => {
    const Component = as as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(
          // Variant
          variantStyles[variant],
          // Size override
          size && sizeMap[size],
          // Weight override
          weight && weightMap[weight],
          // Color
          colorMap[color],
          // Truncation
          truncate && 'truncate',
          lineClamp && `line-clamp-${lineClamp}`,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
