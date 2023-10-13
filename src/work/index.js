import React, { useState } from "react";
import styled from "styled-components";

import { Button, SectionContainer } from "../category/common.styles";
import Andela from "../assets/andela.png";
import AndelaBG from "../assets/andela-bg.png";
import Arrow from "../assets/arrow.png";

const workHistory = [
  {
    icon: Andela,
    background: AndelaBG,
    role: "Head of Web Development (Marketing)",
    duration: "2021 - Present",
    description:
      "Planned and developed all public facing pages and screens of the Andela brand. Rebranded the whole website and integrated numerous onboarding flows.",
  },
];

const WorkContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image}) center;
  background-size: cover;
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
  margin-top: 128px;
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

export const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState(workHistory[0]);

  return (
    <SectionContainer speed={-10}>
      <WorkContainer image={selectedWork.background}>
        <WorkContentContainer>
          <SectionTitle>Work History</SectionTitle>
          <WorkIcon src={selectedWork.icon} />
          <WorkTitle>
            {selectedWork.role} &bull; {selectedWork.duration}
          </WorkTitle>
          <WorkDescription>
            Planned and developed all public facing pages and screens of the
            Andela brand. Rebranded the whole website and integrated numerous
            onboarding flows.
          </WorkDescription>
          <Button>
            <img src={Arrow} alt="Next" />
          </Button>
        </WorkContentContainer>
      </WorkContainer>
    </SectionContainer>
  );
};
