'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

interface HeaderProps extends React.HTMLAttributes<HTMLHeaderElement> {
  logo?: React.ReactNode;
  logoText?: string;
  navigation?: NavLink[];
  rightContent?: React.ReactNode;
  sticky?: boolean;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}

export const Header = React.forwardRef<HTMLHeaderElement, HeaderProps>(
  ({
    logo,
    logoText,
    navigation = [],
    rightContent,
    sticky = false,
    elevation = 'sm',
    className,
    ...props
  }, ref) => {
    const elevationStyles = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    };

    return (
      <header
        ref={ref}
        className={cn(
          'bg-white border-b border-neutral-200',
          sticky && 'sticky top-0 z-40',
          elevationStyles[elevation],
          className,
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {logo && <div className="w-8 h-8">{logo}</div>}
              {logoText && <span className="font-bold text-lg text-neutral-900">{logoText}</span>}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={link.onClick}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    link.active
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-neutral-600 hover:text-neutral-900',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Content */}
            {rightContent && <div className="flex items-center gap-4">{rightContent}</div>}
          </div>
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';
