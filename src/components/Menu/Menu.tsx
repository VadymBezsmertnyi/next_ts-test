import React, { useLayoutEffect, useState } from 'react';
import MenuItems from 'components/MenuItems';

const Menu = () => {
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 1900
  );

  console.log(widthWindow);
  useLayoutEffect(() => {
    if (!isBrowser) return () => false;

    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <MenuItems />;
};

export default Menu;
