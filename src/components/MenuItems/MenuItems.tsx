import React, { useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { LIST_BUTTONS_MENU } from 'constants/header';
import { classes } from './MenuItems.styles';

interface IMenuItemsProps {
  type?: 'classic' | 'mobile';
  selectHash?: string;
}

const MenuItems = ({ type = 'classic', selectHash }: IMenuItemsProps) => {
  const [hover, setHover] = useState<{ [key: number]: boolean }>({});

  return (
    <Box sx={classes.desktopMenu}>
      {LIST_BUTTONS_MENU.map((button) => {
        const selectButton = button.href === selectHash;
        return (
          <Link
            onMouseEnter={() => {
              setHover((state) => ({ ...state, [button.id]: true }));
            }}
            onMouseLeave={() => {
              setHover((state) => ({ ...state, [button.id]: false }));
            }}
            key={button.id}
            style={classes.menuButton(
              hover[button.id] || selectButton || false
            )}
            href={button.href}
          >
            {button.label}
          </Link>
        );
      })}
    </Box>
  );
};

export default MenuItems;
