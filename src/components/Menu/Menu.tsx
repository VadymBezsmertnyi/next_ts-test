import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

import { LIST_BUTTONS_MENU } from 'constants/header';
import { classes } from './Menu.styles';

interface IMenuProps {
  type?: 'desktop' | 'mobile';
}

const Menu = ({ type = 'desktop' }: IMenuProps) => {
  const isBrowser = typeof window !== 'undefined';
  const selectButtonSystem = (isBrowser && window.location.hash) || '';
  const [hover, setHover] = useState<{ [key: number]: boolean }>({});
  const [selectId, setSelectId] = useState(0);

  useEffect(() => {
    const tempSelectButtonId =
      LIST_BUTTONS_MENU.find((button) => button.href === selectButtonSystem)
        ?.id || 0;

    if (tempSelectButtonId !== selectId) setSelectId(tempSelectButtonId);
  });

  return (
    <Box sx={{ ...classes.menu, ...classes.menu[type] }}>
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

export default Menu;
