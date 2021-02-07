import React, { FC } from 'react';
import { NavBarContainer, Logo, MenuToggle, MenuLinks } from '~nav/index';

const NavBar: FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color={['white', 'white', 'Primary.500', 'primary.500']} />
      <MenuToggle toggle={() => toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
export default NavBar;
