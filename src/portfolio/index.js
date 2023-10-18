import React, { useState } from "react";

import { Button, SectionContainer } from "../category/common.styles";
import { projectList } from "./portfolio-list";
import { ArrowButton } from "../work/index.styles";
import Arrow from "../assets/arrow.png";
import OpenLink from "../assets/open-link.png";
import {
  ListContainer,
  ListDetails,
  ButtonHolder,
  ListContent,
  ProjectTitle,
  ProjectDescription,
  TagsHolder,
  Tag,
  LinkHolder,
  LinkIcon,
} from "./index.styles";

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
