import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { LIST_BUTTONS_MENU } from 'constants/header';
import { classes } from './MenuItems.styles';

interface IMenuItemsProps {
  type?: 'classic' | 'mobile';
  selectHash?: string;
}

const MenuItems = ({ type = 'classic', selectHash = '' }: IMenuItemsProps) => {
  const [hover, setHover] = useState<{ [key: number]: boolean }>({});
  const [selectId, setSelectId] = useState(0);

  useEffect(() => {
    const tempSelectButtonId =
      LIST_BUTTONS_MENU.find((button) => button.href === selectHash)?.id || 0;

    if (tempSelectButtonId !== selectId) setSelectId(tempSelectButtonId);
  }, [selectHash]);

  return (
    <Box sx={classes.desktopMenu}>
      {LIST_BUTTONS_MENU.map((button) => {
        return (
          <Link
            key={`link_${button.id}`}
            onMouseEnter={() => {
              setHover((state) => ({ ...state, [button.id]: true }));
            }}
            onMouseLeave={() => {
              setHover((state) => ({ ...state, [button.id]: false }));
            }}
            style={classes.menuButton(
              hover[button.id] || button.id === selectId || false
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
