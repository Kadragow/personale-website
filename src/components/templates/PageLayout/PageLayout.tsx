import React from 'react';
import Background from '../Background/Background';
import './PageLayout.scss';
import { Inter } from 'next/font/google';
import Menu from '@/components/organisms/Menu/Menu';

const inter = Inter({ subsets: ['latin'] });

const PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <body className={inter.className}>
      <main className="main">
        <Menu />
        {children}
        <Background />
      </main>
    </body>
  );
};

export default PageLayout;
