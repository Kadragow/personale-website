import './LargeTitle.scss';
import React from 'react';
import BlurryContainer from '@/components/atoms/BlurryContainer/BlurryContainer';

const LargeTitle = ({
  children,
  className = '',
  ...rest
}: {
  children: string;
  className?: string;
  rest?: Rest;
}): React.ReactNode => {
  return (
    <BlurryContainer className={`large-title ${className}`}>
      <h1 {...rest}>{children}</h1>
    </BlurryContainer>
  );
};

export default LargeTitle;
