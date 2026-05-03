'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';
import { Text } from '@/components/atoms/Text';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const typeStyles = {
  info: 'bg-info-50 border-info-200 text-info-800',
  success: 'bg-success-50 border-success-200 text-success-800',
  warning: 'bg-warning-50 border-warning-200 text-warning-800',
  error: 'bg-error-50 border-error-200 text-error-800',
};

const iconColorMap = {
  info: 'text-info-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  error: 'text-error-600',
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({
    type = 'info',
    title,
    icon,
    dismissible = false,
    onDismiss,
    className,
    children,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleDismiss = () => {
      setIsOpen(false);
      onDismiss?.();
    };

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border p-4 transition-all duration-200',
          typeStyles[type],
          className,
        )}
        role="alert"
        {...props}
      >
        <div className="flex gap-3">
          {icon && <div className={cn('flex-shrink-0 mt-0.5', iconColorMap[type])}>{icon}</div>}
          <div className="flex-1">
            {title && (
              <Text as="div" variant="label" weight={600} className="mb-1">
                {title}
              </Text>
            )}
            <Text as="div" variant="body" size="sm">
              {children}
            </Text>
          </div>
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 font-bold opacity-70 hover:opacity-100"
              aria-label="Dismiss alert"
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';
