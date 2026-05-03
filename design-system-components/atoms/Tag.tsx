'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  removable?: boolean;
  onRemove?: () => void;
  icon?: React.ReactNode;
}

const colorMap = {
  primary: {
    solid: 'bg-primary-500 text-white',
    outline: 'border border-primary-500 text-primary-700 bg-transparent',
  },
  success: {
    solid: 'bg-success-500 text-white',
    outline: 'border border-success-500 text-success-700 bg-transparent',
  },
  warning: {
    solid: 'bg-warning-500 text-white',
    outline: 'border border-warning-500 text-warning-700 bg-transparent',
  },
  error: {
    solid: 'bg-error-500 text-white',
    outline: 'border border-error-500 text-error-700 bg-transparent',
  },
  info: {
    solid: 'bg-info-500 text-white',
    outline: 'border border-info-500 text-info-700 bg-transparent',
  },
  neutral: {
    solid: 'bg-neutral-500 text-white',
    outline: 'border border-neutral-500 text-neutral-700 bg-transparent',
  },
};

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({
    variant = 'solid',
    color = 'primary',
    removable = false,
    onRemove,
    icon,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium',
          colorMap[color][variant],
          className,
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {removable && (
          <button
            onClick={onRemove}
            className="ml-1 flex-shrink-0 font-bold hover:opacity-70"
            aria-label="Remove tag"
          >
            ×
          </button>
        )}
      </div>
    );
  },
);

Tag.displayName = 'Tag';
