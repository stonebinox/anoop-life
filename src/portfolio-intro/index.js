import React from "react";

import { Button, SectionContainer } from "../category/common.styles";
import {
  TextContainer,
  TextDescription,
  TextTitle,
  TextWrapper,
} from "../tech/index.styles";
import { ArrowButton, ButtonHolder } from "../work/index.styles";
import Arrow from "../assets/arrow.png";

export const PortfolioSection = () => {
  return (
    <SectionContainer speed={-10} shouldAlwaysCompleteAnimation white>
      <TextContainer translateY={[80, 0]} shouldAlwaysCompleteAnimation>
        <TextWrapper>
          <TextTitle white>Portfolio</TextTitle>
          <TextDescription white>
            Over the last 12 years, I've worked on over 50 projects. These
            projects range from simple single page applications to full fledged
            platforms, backend services, and apps. The list that follows spans
            over a decade of work ... so, please don't judge me too harshly.
          </TextDescription>
          <ButtonHolder style={{ marginTop: 64 }}>
            <Button dark>
              <ArrowButton src={Arrow} alt="Next" />
            </Button>
          </ButtonHolder>
        </TextWrapper>
      </TextContainer>
    </SectionContainer>
  );
};
