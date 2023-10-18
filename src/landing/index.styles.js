import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 100vw;
  height: 100%;
  opacity: 70%;
  position: absolute;
  top: 0;
  z-index: -2;
  margin-top: 80px;
`;

export const VideoContent = styled.video`
  width: 100%;
  filter: blur(10px);
`;

export const NameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FirstName = styled.div`
  font-size: 128px;
  font-family: "Major-mono", sans-serif;
  text-align: center;
  color: #efefef;
  font-weight: 400;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 600px) {
    font-size: 96px;
  }
`;

export const LastName = styled(FirstName)`
  font-size: 70px;

  @media only screen and (max-width: 600px) {
    font-size: 54px;
  }
`;

export const SectionContent = styled(Parallax)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutCarouselContainer = styled.div`
  width: 100%;
  margin-top: 80px;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    margin-bottom: 32px;
  }
`;

export const CarouselItem = styled.div`
  width: 100%;
  max-width: 440px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 48px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    padding: 8px;
  }
`;

export const CarouselTitle = styled.div`
  font-family: "Roboto-thin", sans-serif;
  color: #fff;
  font-size: 40px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const CarouselDescription = styled(CarouselTitle)`
  font-size: 16px;
  margin-top: 16px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
