'use client';

import React from 'react';
import { Card } from '@/components/molecules/Card';
import { Text } from '@/components/atoms/Text';

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  children: React.ReactNode;
}

export function AuthTemplate({
  title,
  subtitle,
  logo,
  children,
}: AuthTemplateProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-neutral-100 p-4">
      <Card variant="elevated" className="w-full max-w-md">
        <div className="space-y-6">
          {/* Logo */}
          {logo && (
            <div className="flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-lg">
                {logo}
              </div>
            </div>
          )}

          {/* Title & Subtitle */}
          <div className="text-center space-y-2">
            <Text as="h1" variant="heading" size="lg">
              {title}
            </Text>
            {subtitle && (
              <Text as="p" variant="body" color="secondary" size="sm">
                {subtitle}
              </Text>
            )}
          </div>

          {/* Content */}
          {children}
        </div>
      </Card>
    </div>
  );
}

AuthTemplate.displayName = 'AuthTemplate';
