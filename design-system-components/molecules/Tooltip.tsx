'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';
import { Text } from '@/components/atoms/Text';

interface TooltipProps {
  content: string | React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
}

const positionStyles = {
  top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
  bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 -translate-y-1/2',
  right: 'left-full ml-2 top-1/2 -translate-y-1/2',
};

const arrowStyles = {
  top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-neutral-800',
  bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-neutral-800',
  left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-neutral-800',
  right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-neutral-800',
};

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', children }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-3 py-2 rounded-md bg-neutral-800 text-white whitespace-nowrap pointer-events-none',
              'animate-fadeIn',
              positionStyles[position],
            )}
            role="tooltip"
          >
            <Text as="span" variant="caption" color="inverse" size="sm">
              {content}
            </Text>
            <div
              className={cn(
                'absolute w-0 h-0 border-4 border-transparent',
                arrowStyles[position],
              )}
            />
          </div>
        )}
      </div>
    );
  },
);

Tooltip.displayName = 'Tooltip';
