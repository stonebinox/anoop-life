import React, { useState, useEffect } from "react";

import { Button, SectionContainer } from "../category/common.styles";
import Arrow from "../assets/arrow.png";
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

export const WorkSection = ({ data = [], white = null }) => {
  const [selectedWork, setSelectedWork] = useState(0);

  const nextWork = () => {
    if (selectedWork + 1 >= data.length) {
      setSelectedWork(0);
      return;
    }

    setSelectedWork(selectedWork + 1);
  };

  const prevWork = () => {
    if (selectedWork - 1 < 0) {
      setSelectedWork(data.length - 1);
      return;
    }

    setSelectedWork(selectedWork - 1);
  };

  const linkClick = (link) => {
    if (!link) return;

    window.open(link, "_blank");
  };

  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.background;
      img.onload = () => {
        console.log("loaded img");
      };
    });
  }, [data]);

  return (
    <SectionContainer speed={-10} shouldAlwaysCompleteAnimation>
      <WorkContainer image={data[selectedWork].background}>
        <WorkContentContainer white={white}>
          <SectionTitle white={white}>Work History</SectionTitle>
          <WorkIcon
            image={data[selectedWork].icon}
            onClick={() => linkClick(data[selectedWork].link)}
          />
          <WorkTitle white={white}>
            {data[selectedWork].role} &bull; {data[selectedWork].duration}
          </WorkTitle>
          <WorkDescription white={white}>
            {data[selectedWork].description}
          </WorkDescription>
          <ButtonHolder>
            <Button onClick={prevWork} dark={white}>
              <ArrowButton src={Arrow} alt="Previous" className="prev" />
            </Button>
            <Button onClick={nextWork} dark={white}>
              <ArrowButton src={Arrow} alt="Next" />
            </Button>
          </ButtonHolder>
        </WorkContentContainer>
      </WorkContainer>
    </SectionContainer>
  );
};
