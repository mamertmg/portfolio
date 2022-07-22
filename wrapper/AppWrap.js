import React from 'react';
import { NavigationDots, SocialMedia, Navbar } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`w-full min-h-screen max-w-full scroll-smooth flex flex-row ${classNames}`}>
      <SocialMedia />
      <div className="w-full h-full flex flex-col flex-1">
        <Navbar/>
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;