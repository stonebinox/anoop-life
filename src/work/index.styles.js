import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

export const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  transition: all 0.2s ease;
`;

export const WorkContentContainer = styled(Parallax)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.div`
  font-family: "Roboto-Light", sans-serif;
  font-size: 50px;
  color: #efefef;
  text-align: center;
  font-weight: 300;
`;

export const WorkIcon = styled.div`
  width: 360px;
  border: 0;
  height: 100px;
  margin-top: 64px;
  margin-bottom: 48px;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: contain;
  transition: all 0.2s ease;
`;

export const WorkTitle = styled.div`
  font-size: 34px;
  color: #efefef;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 24px;
`;

export const WorkDescription = styled(WorkTitle)`
  width: 100%;
  max-width: 1280px;
  font-family: "Roboto-thin", sans-serif;
  margin-bottom: 64px;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const ArrowButton = styled.img`
  &.prev {
    transform: rotate(180deg);
  }
`;
