'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  count?: number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ width, height = '20px', rounded = 'md', count = 1, className, ...props }, ref) => {
    const roundedMap = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            ref={ref}
            className={cn(
              'animate-pulse bg-neutral-200',
              roundedMap[rounded],
              className,
            )}
            style={{
              width: typeof width === 'number' ? `${width}px` : width,
              height: typeof height === 'number' ? `${height}px` : height,
            }}
            {...props}
          />
        ))}
      </div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
