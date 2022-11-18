import React, { useLayoutEffect, useState } from 'react';
import MenuItems from 'components/MenuItems';

const Menu = () => {
  const isBrowser = typeof window !== 'undefined';
  const selectButtonSystem = (isBrowser && window.location.hash) || '';

  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 1900
  );
  useLayoutEffect(() => {
    if (!isBrowser) return () => false;

    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <MenuItems selectHash={selectButtonSystem} />;
};

export default Menu;
