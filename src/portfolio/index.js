import React, { useState } from "react";
import styled from "styled-components";

import { Button, SectionContainer } from "../category/common.styles";
import { projectList } from "./portfolio-list";
import { Parallax } from "react-scroll-parallax";
import { ArrowButton, WorkDescription, WorkTitle } from "../work/index.styles";
import Arrow from "../assets/arrow.png";
import OpenLink from "../assets/open-link.png";

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  transition: all 0.2s ease;
`;

const ListDetails = styled(Parallax)`
  width: 100%;
  height: auto;
  background: rgb(0, 0, 0);
  position: fixed;
  bottom: 0;
  transition: all 0.2s ease;
  padding-bottom: 32px;
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

const ProjectTitle = styled(WorkTitle)`
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ProjectDescription = styled(WorkDescription)`
  text-align: left;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
`;

const TagsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 4px 8px;
  background-color: #efefef;
  color: #111;
  font-family: "Roboto-thin", sans-serif;
  font-size: 18px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 16px;
`;

const ButtonHolder = styled(Parallax)`
  padding: 32px;
  width: calc(100% - 64px);
`;

const LinkIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const LinkHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;
`;

export const PortfolioListSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const nextProject = () => {
    if (selectedProject + 1 >= projectList.length) {
      setSelectedProject(0);
      return;
    }

    setSelectedProject(selectedProject + 1);
  };

  const prevProject = () => {
    if (selectedProject - 1 < 0) {
      setSelectedProject(projectList.length - 1);
      return;
    }

    setSelectedProject(selectedProject - 1);
  };

  const renderLink = (url) => {
    if (url === null) return;

    return url.map((link, key) => {
      return (
        <Button
          key={key}
          onClick={() => window.open(link, "_blank")}
          style={{
            marginBottom: 8,
            marginLeft: 8,
          }}
        >
          <LinkIcon src={OpenLink} alt="Open Link" />
        </Button>
      );
    });
  };

  return (
    <SectionContainer shouldAlwaysCompleteAnimation speed={-10}>
      <ListContainer image={projectList[selectedProject].image}>
        <ListDetails shouldAlwaysCompleteAnimation translateY={[-40, 0]}>
          <ButtonHolder shouldAlwaysCompleteAnimation translateX={[-60, 30]}>
            <Button onClick={prevProject} dark style={{ margin: "0 auto" }}>
              <ArrowButton src={Arrow} alt="Previous" className="prev" />
            </Button>
          </ButtonHolder>
          <ListContent>
            <ProjectTitle>
              {selectedProject + 1}/{projectList.length}:&nbsp;
              {projectList[selectedProject].title}&nbsp;
            </ProjectTitle>
            <ProjectDescription>
              {projectList[selectedProject].description}
            </ProjectDescription>
            <TagsHolder>
              {projectList[selectedProject].tags.map((tag, key) => (
                <Tag key={key}>{tag}</Tag>
              ))}
            </TagsHolder>
            <LinkHolder>
              {renderLink(projectList[selectedProject].url)}
            </LinkHolder>
          </ListContent>
          <ButtonHolder shouldAlwaysCompleteAnimation translateX={[60, -30]}>
            <Button onClick={nextProject} dark style={{ margin: "0 auto" }}>
              <ArrowButton src={Arrow} alt="Next" />
            </Button>
          </ButtonHolder>
        </ListDetails>
      </ListContainer>
    </SectionContainer>
  );
};
