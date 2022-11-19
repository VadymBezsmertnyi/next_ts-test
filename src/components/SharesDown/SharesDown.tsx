import React, { useState, useLayoutEffect } from 'react';
import { Box } from '@mui/material';

import { classes } from './SharesDown.styles';

const SharesDown = () => {
  const isBrowser = typeof window !== 'undefined';
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

  return (
    <Box sx={classes.shares}>
      <Box component={'img'} sx={classes.imageLeft} src={`/black.png`} />
      <Box component={'img'} sx={classes.imageRight} src={`/black.png`} />
      <Box sx={classes.centerImg} />
    </Box>
  );
};

export default SharesDown;
