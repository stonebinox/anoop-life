import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #000;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  height: 80px;
`;

export const LogoHolder = styled.div`
  width: 100%;
`;

export const LogoItem = styled.img`
  width: 50px;
  border: 0;
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled.a`
  font-family: "Roboto-thin", sans-serif;
  color: #efefef;
  text-align: center;
  font-size: 24px;
  font-weight: 100;
  line-height: normal;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-left: 14px;
  margin-right: 14px;

  &.active,
  &:hover {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  &.active {
    text-decoration: underline;
  }
`;