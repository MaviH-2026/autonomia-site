'use client';

import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Sidebar } from '@/components/organisms/Sidebar';

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface DashboardTemplateProps {
  logo?: React.ReactNode;
  logoText?: string;
  headerNav?: NavLink[];
  sidebarItems?: SidebarItem[];
  rightContent?: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardTemplate({
  logo,
  logoText,
  headerNav = [],
  sidebarItems = [],
  rightContent,
  children,
}: DashboardTemplateProps) {
  return (
    <div className="flex h-screen bg-neutral-50">
      {/* Sidebar */}
      <Sidebar items={sidebarItems} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          logo={logo}
          logoText={logoText}
          navigation={headerNav}
          rightContent={rightContent}
          sticky
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

DashboardTemplate.displayName = 'DashboardTemplate';
