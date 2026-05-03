'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  name?: string;
  initials?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const sizeMap = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-2xl',
};

const statusColorMap = {
  online: 'bg-success-500',
  offline: 'bg-neutral-400',
  busy: 'bg-error-500',
  away: 'bg-warning-500',
};

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({
    size = 'md',
    name,
    initials,
    status,
    src,
    alt,
    className,
    ...props
  }, ref) => {
    const hasImage = src && typeof src === 'string';
    const displayInitials = initials || (name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '?');

    return (
      <div className="relative inline-block">
        {hasImage ? (
          <img
            ref={ref}
            src={src}
            alt={alt || name || 'Avatar'}
            className={cn(
              'rounded-full object-cover font-medium',
              sizeMap[size],
              className,
            )}
            {...props}
          />
        ) : (
          <div
            className={cn(
              'flex items-center justify-center rounded-full bg-primary-500 text-white font-semibold',
              sizeMap[size],
              className,
            )}
          >
            {displayInitials}
          </div>
        )}
        {status && (
          <div
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-2 border-white',
              status === 'xs' ? 'w-2 h-2' : status === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3',
              statusColorMap[status],
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
