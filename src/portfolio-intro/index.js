import React from "react";

import { SectionContainer } from "../category/common.styles";
import {
  TextContainer,
  TextDescription,
  TextTitle,
  TextWrapper,
} from "../tech/index.styles";

export const PortfolioSection = () => {
  return (
    <SectionContainer
      id="portfolio"
      speed={-10}
      shouldAlwaysCompleteAnimation
      white
    >
      <TextContainer translateY={[80, 0]} shouldAlwaysCompleteAnimation>
        <TextWrapper>
          <TextTitle white>Portfolio</TextTitle>
          <TextDescription white>
            Over the last {new Date().getFullYear() - 2011} years, I've worked
            on over 40 projects. These projects range from simple single page
            applications to full fledged platforms, backend services, and apps.
            The list that follows spans over a decade of work ... so, please
            don't judge me too harshly.
          </TextDescription>
        </TextWrapper>
      </TextContainer>
    </SectionContainer>
  );
};
