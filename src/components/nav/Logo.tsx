import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface LogoProps {
  w: string;
  color: string[] | string;
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
