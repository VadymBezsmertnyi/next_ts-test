import React from 'react';
import { Box } from '@mui/material';
import { LogoCompanySvg, PhoneSvg } from 'images';
import { Menu } from 'components';

import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Box component={'header'} className={classes.desktopHeader}>
      <LogoCompanySvg />
      <Menu />
      <PhoneSvg />
    </Box>
  );
};

export default Header;
