import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Button, SectionContainer } from "../category/common.styles";
import Arrow from "../assets/arrow.png";
import { workHistory } from "./work-history";

const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  transition: all 0.2s ease;
`;

const WorkContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.div`
  font-family: "Roboto-Light", sans-serif;
  font-size: 50px;
  color: #efefef;
  text-align: center;
  font-weight: 300;
`;

const WorkIcon = styled.img`
  width: 360px;
  border: 0;
  margin-top: 64px;
`;

const WorkTitle = styled.div`
  font-size: 34px;
  color: #efefef;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 24px;
`;

const WorkDescription = styled(WorkTitle)`
  width: 100%;
  max-width: 1280px;
  font-family: "Roboto-thin", sans-serif;
  margin-bottom: 32px;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const ArrowButton = styled.img`
  &.prev {
    transform: rotate(180deg);
  }
`;

export const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState(0);

  const nextWork = () => {
    if (selectedWork + 1 >= workHistory.length) {
      setSelectedWork(0);
      return;
    }

    setSelectedWork(selectedWork + 1);
  };

  const prevWork = () => {
    if (selectedWork - 1 < 0) {
      setSelectedWork(workHistory.length - 1);
      return;
    }

    setSelectedWork(selectedWork - 1);
  };

  useEffect(() => {
    workHistory.forEach((item) => {
      const img = new Image();
      img.src = item.background;
      img.onload = () => {
        console.log("loaded img");
      };
    });
  }, []);

  return (
    <SectionContainer speed={-10}>
      <WorkContainer image={workHistory[selectedWork].background}>
        <WorkContentContainer>
          <SectionTitle>Work History</SectionTitle>
          <WorkIcon src={workHistory[selectedWork].icon} />
          <WorkTitle>
            {workHistory[selectedWork].role} &bull;{" "}
            {workHistory[selectedWork].duration}
          </WorkTitle>
          <WorkDescription>
            {workHistory[selectedWork].description}
          </WorkDescription>
          <ButtonHolder>
            <Button onClick={prevWork}>
              <ArrowButton src={Arrow} alt="Previous" className="prev" />
            </Button>
            <Button onClick={nextWork}>
              <ArrowButton src={Arrow} alt="Next" />
            </Button>
          </ButtonHolder>
        </WorkContentContainer>
      </WorkContainer>
    </SectionContainer>
  );
};
