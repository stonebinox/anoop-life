import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

export const TextContainer = styled(Parallax)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    height: auto;
    margin-top: 256px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 600px) {
    padding: 16px;
    width: calc(100% - 32px);
  }
`;

export const TextTitle = styled.div`
  font-family: "Robot-Light", sans-serif;
  font-size: 50px;
  color: ${({ white }) => (white ? `#333` : `#efefef`)};
  font-weight: 300;
  text-align: left;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 44px;
    text-align: center;
  }
`;

export const TextDescription = styled(TextTitle)`
  font-family: "Roboto-thin", sans-serif;
  font-size: 34px;
  font-weight: 100;
  text-align: left;
  margin-top: 32px;

  & > .small {
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    text-align: center;
  }
`;
