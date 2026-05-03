'use client';

import React from 'react';
import { cn } from '@/design-system/utils/cn';

interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  children?: SidebarItem[];
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItem[];
  collapsible?: boolean;
  width?: 'sm' | 'md';
}

const widthMap = {
  sm: 'w-56',
  md: 'w-64',
};

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ items, collapsible = false, width = 'md', className, ...props }, ref) => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          'bg-neutral-900 text-white transition-all duration-300',
          collapsed ? 'w-20' : widthMap[width],
          'min-h-screen border-r border-neutral-800',
          className,
        )}
        {...props}
      >
        {collapsible && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full p-4 text-left hover:bg-neutral-800 transition-colors"
          >
            {collapsed ? '→' : '←'}
          </button>
        )}

        <nav className="space-y-1 p-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              onClick={item.onClick}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                item.active
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-300 hover:bg-neutral-800',
              )}
            >
              {item.icon && <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>}
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    );
  },
);

Sidebar.displayName = 'Sidebar';
