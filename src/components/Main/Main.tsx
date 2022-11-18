import React from 'react';
import { Box } from '@mui/material';
import { SharesUp } from 'components';

import { classes } from './Main.styles';

const Main = () => {
  return (
    <Box component={'main'} sx={classes.main}>
      <SharesUp />
    </Box>
  );
};

export default Main;
