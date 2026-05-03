'use client';

import React from 'react';
import { Input } from '@/components/atoms/Input';
import { Text } from '@/components/atoms/Text';
import { cn } from '@/design-system/utils/cn';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    label,
    error,
    hint,
    required = false,
    variant = 'primary',
    size = 'md',
    icon,
    className,
    id,
    ...props
  }, ref) => {
    const fieldId = id || `input-${Math.random()}`;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={fieldId} className="block">
            <Text as="label" variant="label" weight={500}>
              {label}
              {required && <span className="text-error-500 ml-1">*</span>}
            </Text>
          </label>
        )}
        <Input
          ref={ref}
          id={fieldId}
          variant={variant}
          size={size}
          icon={icon}
          error={!!error}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          {...props}
        />
        {error && (
          <Text id={`${fieldId}-error`} variant="caption" color="error" size="sm">
            {error}
          </Text>
        )}
        {hint && !error && (
          <Text id={`${fieldId}-hint`} variant="caption" color="tertiary" size="sm">
            {hint}
          </Text>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
