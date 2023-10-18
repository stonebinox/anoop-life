import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

import { WorkDescription, WorkTitle } from "../work/index.styles";

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  transition: all 0.2s ease;
`;

export const ListDetails = styled(Parallax)`
  width: 100%;
  height: auto;
  background: #000;
  position: fixed;
  bottom: 0;
  transition: all 0.2s ease;
  padding-bottom: 32px;
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const ListContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const ProjectTitle = styled(WorkTitle)`
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProjectDescription = styled(WorkDescription)`
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  font-size: 18px;
`;

export const TagsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  padding: 4px 8px;
  background-color: #efefef;
  color: #111;
  font-family: "Roboto-thin", sans-serif;
  font-size: 18px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 16px;
`;

export const ButtonHolder = styled(Parallax)`
  padding: 32px;
  width: calc(100% - 64px);

  @media only screen and (max-width: 600px) {
    padding: 4px;
    width: auto;
  }
`;

export const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LinkHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 4px;
  }
`;
