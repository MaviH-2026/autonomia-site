'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';
import { Text } from '@/components/atoms/Text';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLNavElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLNavElement, BreadcrumbProps>(
  ({ items, separator = '/', className, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn('', className)} aria-label="Breadcrumb" {...props}>
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    'hover:text-primary-600 transition-colors',
                    item.active ? 'text-neutral-900 font-medium' : 'text-neutral-600',
                  )}
                  aria-current={item.active ? 'page' : undefined}
                >
                  <Text as="span" size="sm">
                    {item.label}
                  </Text>
                </a>
              ) : (
                <Text
                  as="span"
                  size="sm"
                  className={cn(
                    item.active ? 'text-neutral-900 font-medium' : 'text-neutral-600',
                  )}
                >
                  {item.label}
                </Text>
              )}
              {index < items.length - 1 && (
                <span className="text-neutral-400 mx-1">{separator}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
