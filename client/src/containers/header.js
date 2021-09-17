import React, { useEffect, useState } from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  const [isTablet, setTablet] = useState(window.innerWidth > 1000);
  const [isMobile, setMobile] = useState(window.innerWidth > 770);

  const updateMedia = () => {
    setTablet(window.innerWidth < 1000);
    setMobile(window.innerWidth < 770);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <Header>
      {isMobile && (
        <Header.RowMobile>
          <Header.HamburgerMenu />
          <Header.Logo to="/home" src="/images/logo-white-background.PNG" />
          <Header.UserIcon />
        </Header.RowMobile>
      )}
      {!isMobile && (
        <Header.Row>
          <Header.Column>
            <Header.Logo to="/home" src="/images/logo.PNG" />
            <Header.Location>Helsinki</Header.Location>
          </Header.Column>
          <Header.ColumnLeft>
            {!isTablet && (
              <>
                <Header.ButtonLink>Contact</Header.ButtonLink>
                <Header.ButtonLink>For salons</Header.ButtonLink>
              </>
            )}

            <Header.ButtonLink>Log In</Header.ButtonLink>
            <Header.ButtonLinkDarkBackground>
              Register
            </Header.ButtonLinkDarkBackground>
          </Header.ColumnLeft>
        </Header.Row>
      )}

      <Header.SubRow>
        <p>Dark mode</p>
      </Header.SubRow>
    </Header>
  );
}
