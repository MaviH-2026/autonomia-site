'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  color?: 'light' | 'medium' | 'dark';
}

const colorMap = {
  light: 'border-neutral-100',
  medium: 'border-neutral-300',
  dark: 'border-neutral-400',
};

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({
    orientation = 'horizontal',
    variant = 'solid',
    color = 'medium',
    className,
    ...props
  }, ref) => {
    const isVertical = orientation === 'vertical';

    return (
      <hr
        ref={ref}
        className={cn(
          'border-0',
          isVertical ? 'h-full w-px' : 'w-full h-px',
          variant === 'dashed' && 'border-dashed',
          variant === 'solid' && 'border-solid',
          colorMap[color],
          className,
        )}
        style={{
          borderTopStyle: variant === 'dashed' ? 'dashed' : 'solid',
          borderColor: 'currentColor',
        }}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
