import React, { useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';

interface IMenuItemsProps {
  type?: 'classic' | 'mobile';
}

const MenuItems = ({ type = 'classic' }: IMenuItemsProps) => {
  return <Box>MenuItems</Box>;
};

export default MenuItems;
