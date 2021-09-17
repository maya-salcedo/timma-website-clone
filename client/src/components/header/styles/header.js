import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  z-index: 20;
  position: fixed;
  border-color: transparent;
  background-color: #ffece4;
`;

export const Base = styled.div`
  padding: 0;
  align-items: center;
  display: flex;
  width: 100%;
`;

export const Frame = styled.div`
  flex-basis: 0;
  lign-items: center;
  flex-grow: 1;
  flex-wrap: nowrap;
  display: flex;
`;

export const Logo = styled.img`
  height: 100%;
  width: 200px;
  margin-right: 40px;
`;

export const Location = styled.div``;

export const ButtonLink = styled(ReachRouterLink)``;
