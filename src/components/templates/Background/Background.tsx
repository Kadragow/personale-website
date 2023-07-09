import React from 'react';
import BorderH from 'public/assets/border-h.svg';
import BorderV from 'public/assets/border-v.svg';
import './Background.scss';
import ParticlesCanvas from '@/components/organisms/ParticlesCanvas/ParticlesCanvas';

const Background = (): React.ReactNode => {
  return (
    <div className="background" id="background">
      <ParticlesCanvas />

      <BorderH className="border border--top" />
      <BorderV className="border border--right" />
      <BorderH className="border border--bottom" />
      <BorderV className="border border--left" />
    </div>
  );
};

export default Background;
