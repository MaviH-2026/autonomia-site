'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles = {
  primary: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
  secondary: 'border-neutral-200 focus:border-primary-400 focus:ring-primary-400',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm h-8',
  md: 'px-4 py-2 text-base h-10',
  lg: 'px-5 py-3 text-lg h-12',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    variant = 'primary',
    size = 'md',
    error = false,
    icon,
    iconPosition = 'left',
    className,
    ...props
  }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && iconPosition === 'left' && (
          <span className="absolute left-3 text-neutral-500">{icon}</span>
        )}
        <input
          ref={ref}
          className={cn(
            // Base
            'w-full rounded-md border bg-white text-neutral-900 transition-all duration-200',
            'placeholder:text-neutral-400',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-500',
            // Variant
            variantStyles[variant],
            // Error
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500',
            // Size
            sizeStyles[size],
            // Icon padding
            icon && iconPosition === 'left' && 'pl-10',
            icon && iconPosition === 'right' && 'pr-10',
            className,
          )}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <span className="absolute right-3 text-neutral-500">{icon}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
