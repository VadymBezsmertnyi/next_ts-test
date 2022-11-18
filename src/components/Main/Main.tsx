import React from 'react';
import { Box } from '@mui/material';
import { SharesUp, Feedback, Timer } from 'components';

import { classes } from './Main.styles';

const Main = () => {
  return (
    <Box component={'main'} sx={classes.main}>
      <SharesUp />
      <Feedback />
      <Timer />
    </Box>
  );
};

export default Main;
