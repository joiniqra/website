import React, { FC } from 'react';
import { Link, Text } from '@chakra-ui/react';

type MenuItem = {
  isLast?: boolean;
  to: string;
};

const MenuItem: FC<MenuItem> = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to} mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
