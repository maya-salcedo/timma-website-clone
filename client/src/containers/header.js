import React from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Row>
        <Header.Column>
          <Header.Logo to="/home" src="/images/logo.PNG" />
          <Header.Location>Helsinki</Header.Location>
        </Header.Column>
        <Header.ColumnLeft>
          <Header.ButtonLink>Contact</Header.ButtonLink>
          <Header.ButtonLink>For salons</Header.ButtonLink>
          <Header.ButtonLink>Log In</Header.ButtonLink>
          <Header.ButtonLinkDarkBackground>
            Register
          </Header.ButtonLinkDarkBackground>
        </Header.ColumnLeft>
      </Header.Row>
      <Header.SubRow>
        <p>Dark mode</p>
      </Header.SubRow>
    </Header>
  );
}
