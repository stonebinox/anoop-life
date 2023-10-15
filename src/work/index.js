import React, { useState, useEffect } from "react";

import { Button, SectionContainer } from "../category/common.styles";
import Arrow from "../assets/arrow.png";
import { workHistory } from "./work-history";
import {
  WorkContainer,
  WorkContentContainer,
  SectionTitle,
  WorkIcon,
  WorkTitle,
  WorkDescription,
  ButtonHolder,
  ArrowButton,
} from "./index.styles";

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
    <SectionContainer speed={-10} shouldAlwaysCompleteAnimation>
      <WorkContainer image={workHistory[selectedWork].background}>
        <WorkContentContainer>
          <SectionTitle>Work History</SectionTitle>
          <WorkIcon image={workHistory[selectedWork].icon} />
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
