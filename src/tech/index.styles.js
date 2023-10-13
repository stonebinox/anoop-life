import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

export const TextContainer = styled(Parallax)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  height: auto;
`;

export const TextTitle = styled.div`
  font-family: "Robot-Light", sans-serif;
  font-size: 50px;
  color: #efefef;
  font-weight: 300;
  text-align: left;
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
`;
