import React from 'react';
import Background from '../Background/Background';
import styles from './PageLayout.module.scss';

const PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <main className={styles.main}>
      {children}
      <Background />
    </main>
  );
};

export default PageLayout;
