import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

export const SectionContainer = styled(Parallax)`
  width: 100%;
  height: 100vh;

  ${({ white }) => white && `background-color: #fff;`}
`;

export const Button = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ dark }) => (dark ? "#ccc" : "#efefef")};
  border-radius: 80px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background-color: ${({ dark }) => (dark ? "#fff" : "#111")};
  }

  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;
