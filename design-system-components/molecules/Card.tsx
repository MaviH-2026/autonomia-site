'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hoverable?: boolean;
}

const variantStyles = {
  flat: 'bg-neutral-50 border border-neutral-100',
  elevated: 'bg-white shadow-md',
  outlined: 'bg-white border border-neutral-200',
};

const paddingMap = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    variant = 'elevated',
    padding = 'md',
    hoverable = false,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg transition-all duration-200',
          variantStyles[variant],
          paddingMap[padding],
          hoverable && 'hover:shadow-lg cursor-pointer',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

// Card header
export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('border-b border-neutral-200 pb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

// Card body
export const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('py-4', className)} {...props} />,
);
CardBody.displayName = 'CardBody';

// Card footer
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('border-t border-neutral-200 pt-4', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';
