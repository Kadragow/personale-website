'use client';
import './MenuLink.scss';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const MenuLink = ({
  label,
  href,
  className = '',
}: {
  label: string;
  href: string;
  className?: string;
}): React.ReactNode => {
  const pathname = usePathname();

  const getActiveClass = pathname === href ? 'active' : '';

  return (
    <Link href={href} className={`menu-link ${getActiveClass} ${className}`}>
      {label}
    </Link>
  );
};

export default MenuLink;
