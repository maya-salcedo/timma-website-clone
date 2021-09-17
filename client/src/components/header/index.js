import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBars,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Logo,
  Location,
  ButtonLink,
  Row,
  Column,
  ColumnLeft,
  SubRow,
  ButtonLinkDarkBackground,
  RowMobile,
  Icon,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Row = function HeaderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Header.SubRow = function HeaderSubRow({ children, ...restProps }) {
  return <SubRow {...restProps}>{children}</SubRow>;
};

Header.Column = function HeaderColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Header.ColumnLeft = function HeaderColumnLeft({ children, ...restProps }) {
  return <ColumnLeft {...restProps}>{children}</ColumnLeft>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Location = function HeaderLocation({ children, ...restProps }) {
  return (
    <Location {...restProps}>
      <FontAwesomeIcon icon={faMapMarkerAlt} /> {children}
    </Location>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.ButtonLinkDarkBackground = function HeaderButtonLinkDarkBackground({
  children,
  ...restProps
}) {
  return (
    <ButtonLinkDarkBackground {...restProps}>
      {children}
    </ButtonLinkDarkBackground>
  );
};

Header.HamburgerMenu = function HeaderHamburgerMenu({
  children,
  ...restProps
}) {
  return (
    <Icon {...restProps}>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </Icon>
  );
};

Header.UserIcon = function HeaderHamburgerMenu({ children, ...restProps }) {
  return (
    <Icon {...restProps}>
      <FontAwesomeIcon icon={faUserCircle} className="icon" />
    </Icon>
  );
};

Header.RowMobile = function HeaderRowMobile({ children, ...restProps }) {
  return <RowMobile {...restProps}>{children}</RowMobile>;
};
