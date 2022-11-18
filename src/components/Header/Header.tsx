import React from 'react';
import { Box } from '@mui/material';
import { LogoCompanySvg, PhoneSvg } from 'images';
import { Menu } from 'components';

import { classes } from './Header.styles';

const Header = () => {
  return (
    <Box component={'header'} sx={classes.desktopHeader}>
      <LogoCompanySvg />
      <Menu />
      <PhoneSvg />
    </Box>
  );
};

export default Header;
