'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/design-system/utils/cn';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactElement[];
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({
    direction = 'horizontal',
    size = 'md',
    variant = 'primary',
    className,
    children,
    ...props
  }, ref) => {
    const isVertical = direction === 'vertical';

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex gap-0 rounded-lg overflow-hidden border border-neutral-300',
          isVertical ? 'flex-col' : 'flex-row',
          className,
        )}
        role="group"
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;

          return React.cloneElement(child as React.ReactElement<any>, {
            size,
            variant,
            className: cn(
              'rounded-none border-0',
              index > 0 && (isVertical ? 'border-t' : 'border-l'),
              'border-neutral-300',
              child.props.className,
            ),
          });
        })}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
