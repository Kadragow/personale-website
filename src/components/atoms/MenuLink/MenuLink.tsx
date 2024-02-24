'use client';
import './MenuLink.scss';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const MenuLink = ({
  label,
  href,
  className = '',
  ...rest
}: {
  label: string;
  href: string;
  className?: string;
  rest?: Rest;
}): React.ReactNode => {
  const pathname = usePathname();

  const getActiveClass = pathname === href ? 'active' : '';

  return (
    <Link
      href={href}
      className={`menu-link ${getActiveClass} ${className}`}
      {...rest}
    >
      {label}
    </Link>
  );
};

export default MenuLink;
