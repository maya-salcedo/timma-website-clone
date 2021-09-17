import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Base,
  Frame,
  Logo,
  Location,
  ButtonLink,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Container {...restProps}>{children}</Container> : children;
}

Header.Base = function HeaderBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />;
    </ReachRouterLink>
  );
};

Header.Location = function HeaderLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
