import React, { useState, useLayoutEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

import { DOWN_TEXT_SHARES, UP_TEXT_SHARES } from 'constants/main';
import { classes } from './SharesUp.styles';

const SharesUp = () => {
  const blueText = (text: string) => {
    const index = text.indexOf(' ');
    const startText = text.slice(0, index);
    const finishText = text.slice(index, text.length);
    return (
      <>
        <Box component={'span'} sx={classes.textColor}>
          {startText}
        </Box>
        {finishText}
      </>
    );
  };
  return (
    <Box sx={classes.sharesUp}>
      <Typography sx={classes.textUp}>{blueText(UP_TEXT_SHARES)}</Typography>
      <Typography sx={classes.textDown}>{DOWN_TEXT_SHARES}</Typography>
      <Button sx={classes.button}>
        <Link style={classes.textButton} href={'#feedback'}>
          Получить скидку!
        </Link>
      </Button>
    </Box>
  );
};

export default SharesUp;
