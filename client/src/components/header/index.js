import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> {children}
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
