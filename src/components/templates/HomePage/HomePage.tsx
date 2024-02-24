import React from 'react';
import './HomePage.scss';
import LargeTitle from '@/components/molecules/LargeTitle/LargeTitle';

const HomePage = (): React.ReactNode => {
  return (
    <div className="home-page">
      <div className="title-container">
        <div className="title-container--main">
          <LargeTitle className="home-page--side">DEV</LargeTitle>
          <LargeTitle className="home-page--title">Kamil Błanik</LargeTitle>
        </div>
        <div className="title-container--sub">
          <LargeTitle className="home-page--subtitle">Frontend</LargeTitle>
          <LargeTitle className="home-page--subtitle">Backend</LargeTitle>
          <LargeTitle className="home-page--subtitle">JavaScript</LargeTitle>
          <LargeTitle className="home-page--subtitle">TypeScript</LargeTitle>
          <LargeTitle className="home-page--subtitle">NodeJS</LargeTitle>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
