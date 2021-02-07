import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

import NavBar from '~stk/NavBar';

const IndexPage: FC = () => {
  return (
    <>
      <NavBar />
      <Box p={8}>
        <Text fontSize="xl">Hello World</Text>
      </Box>
    </>
  );
};

export default IndexPage;
