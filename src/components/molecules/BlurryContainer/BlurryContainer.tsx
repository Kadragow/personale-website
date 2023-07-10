import React from 'react';
import './BlurryContainer.scss';

const BlurryContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode => {
  return <div className={`blurry-container ${className}`}>{children}</div>;
};

export default BlurryContainer;
