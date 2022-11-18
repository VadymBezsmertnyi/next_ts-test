import React from 'react';
import { Box, Button, ClickAwayListener, Popper } from '@mui/material';
import { BurgerMenu, LogoCompanySvg, PhoneSvg } from 'images';
import { Menu } from 'components';

import { classes } from './Header.styles';
import Link from 'next/link';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box component={'header'} sx={classes.desktopHeader}>
      <LogoCompanySvg />
      <Menu />
      <Box sx={classes.boxPhoneButton}>
        <Link href={`tel:+380938150664`}>
          <PhoneSvg />
        </Link>
      </Box>
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <>
          <Button onClick={handleClick} sx={classes.burgerButton}>
            <BurgerMenu />
          </Button>
          <Popper id={'simple-popper'} open={open} anchorEl={anchorEl}>
            <Menu type="mobile" />
          </Popper>
        </>
      </ClickAwayListener>
    </Box>
  );
};

export default Header;
