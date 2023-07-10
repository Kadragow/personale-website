import Link from 'next/link';
import React from 'react';
import './MenuLInk.scss';

const MenuLink = ({
  label,
  href,
  className = '',
}: {
  label: string;
  href: string;
  className?: string;
}): React.ReactNode => {
  return (
    <Link href={href} className={`menu-link ${className}`}>
      {label}
    </Link>
  );
};

export default MenuLink;
