import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="flex flex-col justify-center items-center pr-2">
    {['hero','aboutme', 'business', 'industries', 'polymers', 'projects','techstack','contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="md:h-2.5 md:w-2.5 rounded-full bg-gray-600 m-2"
        style={active === item ? { backgroundColor: 'rgb(225 29 72 / var(--tw-bg-opacity)' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;