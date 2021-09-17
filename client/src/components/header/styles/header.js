import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  z-index: 20;
  position: fixed;
  border-color: transparent;
  background-color: #ffece4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubRow = styled(Row)`
  flex-direction: row-reverse;
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: auto;
  align-content: start;
`;

export const ColumnLeft = styled(Column)`
  justify-content: end;
  padding-right: 0.5rem;
`;

export const Logo = styled.img`
  height: 2rem;
  width: 5.5rem;
  padding: 0.5rem 1rem 0 1rem;
`;

export const Location = styled.div`
  max-width: 180px;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: #0d1718;
  box-sizing: border-box;
  padding: 0.9rem 0.5rem;
  font-size: 0.8rem;

  &:hover {
    color: #007a83;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  box-sizing: border-box;
  color: #0d1718;
  margin: 0.6rem;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 0.7rem;

  :first-of-type {
    border-right: 1px solid;
    padding-right: 1rem;
    margin-right: 0;
  }

  &:hover {
    color: #007a83;
  }
`;

export const ButtonLinkDarkBackground = styled(ButtonLink)`
  border: 1px solid #0d1718;
  color: #fff;
  background-color: #0d1718;
  border-radius: 12px;
  padding: 0.4rem 0.9rem;
`;
