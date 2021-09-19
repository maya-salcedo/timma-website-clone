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

export const RowMobile = styled(Row)`
  border-color: #fff;
  background-color: #fff;
`;

export const Icon = styled.div`
  padding: 0.8rem;

  .icon {
    font-size: 1.2rem;
  }
`;
export const Toggle = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleText = styled.span`
  width: 4rem;
  font-size: 0.7rem;
  margin-top: 0;
`;

export const ToggleSwitch = styled.div`
  height: 1.5rem;
  > input {
    position: absolute;
    opacity: 0;
    z-index: -2;
  }
  > label {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 1.2rem;
    border-radius: 20px;
    margin: 0;
    cursor: pointer;
    box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
      inset 10px 10px 10px rgba(0, 0, 0, 0.25);
  }
  > label::before {
    position: absolute;
    content: 'OFF';
    font-size: 0.6rem;
    text-align: center;
    line-height: 1rem;
    top: 0.1rem;
    left: 0.1rem;
    width: 2rem;
    height: 1rem;
    border-radius: 2rem;
    background-color: #d1dad3;
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
      3px 3px 5px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }
  > input:checked + label::before {
    left: 40%;
    content: 'ON';
    color: #0d1718;
    background-color: #ffece4;
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px #ffece4;
  }
`;
