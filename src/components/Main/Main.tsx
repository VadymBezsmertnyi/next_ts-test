import React from 'react';
import { Box } from '@mui/material';
import { SharesUp, SharesDown, Feedback, Timer, Slider } from 'components';

import { classes } from './Main.styles';

const Main = () => {
  return (
    <Box component={'main'} sx={classes.main}>
      <SharesUp />
      <SharesDown />
      <Feedback />
      <Slider />
      <Timer />
    </Box>
  );
};

export default Main;
