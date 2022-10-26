import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import P from 'prop-types';
import { Article } from '../Article';
import * as Styled from './styles';

import mock from './mock';

import { LogoLink } from '../LogoLink';

import { MenuLink } from '../MenuLink';
import React, { useState } from 'react';

export const Menu = ({ links, blogName, logo }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  let event = React.MouseEvent;

  const handleOpenCloseMenu = (event) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close Menu" />}
        {!menuVisible && <MenuIcon aria-label="Open Menu" />}
      </Styled.OpenClose>
      <Styled.Container menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  links: P.string.isRequired,
  blogName: P.string.isRequired,
  logo: P.bool.isRequired,
};
