import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';

type Toggle = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle: FC<Toggle> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={() => toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
