import React from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Base>
        <Header.Frame>
          <Header.Logo to="/home" src="/images/logo.PNG" />
          <Header.Location>Helsinki</Header.Location>
        </Header.Frame>
        <Header.Frame>
          <Header.ButtonLink>Contact</Header.ButtonLink>
          <Header.ButtonLink>For salons</Header.ButtonLink>
          <Header.ButtonLink>Log In</Header.ButtonLink>
          <Header.ButtonLink>Register</Header.ButtonLink>
        </Header.Frame>
        <Header.Frame>
          <p>DARK MODE</p>
        </Header.Frame>
      </Header.Base>
    </Header>
  );
}
