import styled from "styled-components";

export const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  transition: all 0.2s ease;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const WorkContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ white }) =>
    white ? `rgba(255, 255, 255, 0.9)` : `rgba(0, 0, 0, 0.9)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: auto;
    padding-bottom: 32px;
  }
`;

export const SectionTitle = styled.div`
  font-family: "Roboto-Light", sans-serif;
  font-size: 50px;
  color: ${({ white }) => (white ? `#333` : `#efefef`)};
  text-align: center;
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 50px;
    margin-top: 32px;
  }
`;

export const WorkIcon = styled.div`
  width: 360px;
  border: 0;
  height: 100px;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 48px;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: contain;
  cursor: pointer;
  transition: all 0.2s ease;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const WorkTitle = styled.div`
  font-size: 34px;
  color: ${({ white }) => (white ? `#333` : `#efefef`)};
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 24px;

  @media only screen and (max-width: 600px) {
    font-size: 26px;
  }
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

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const ArrowButton = styled.img`
  &.prev {
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 600px) {
    width: 20px;
  }
`;
