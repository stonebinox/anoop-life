import React from "react";

import { SectionContainer } from "../category/common.styles";
import {
  TextContainer,
  TextWrapper,
  TextTitle,
  TextDescription,
} from "./index.styles";
import { checkDisabledStatus } from "../utils/utils";

export const TechSection = () => (
  <SectionContainer
    speed={-10}
    shouldAlwaysCompleteAnimation
    disabled={checkDisabledStatus()}
  >
    <TextContainer
      translateY={[60, 0]}
      shouldAlwaysCompleteAnimation
      disabled={checkDisabledStatus()}
    >
      <TextWrapper>
        <TextTitle>Tech Stack</TextTitle>
        <TextDescription>
          On the frontend, I actively work with React, React Native, Typescript,
          Chrome Extensions, Javascript, jQuery, WordPress, CSS, and HTML.
          <br />
          <br />
          On the backend, I actively work with Node, Typescript, PHP, Python,
          MySQL, MongoDB, Heroku, Netlify, and AWS.
          <br />
          <br />
          Other tech I work with: GraphQL, Express, GatsbyJS, NextJS, Webflow,
          Less, Yii, Symfony, Laravel, PostGresSQL, Django, Flutter, and
          Contenful
          <br />
          <br />
          <span className="small">
            ... and C#, Java, and Ruby but it’s been a while.
          </span>
        </TextDescription>
      </TextWrapper>
    </TextContainer>
  </SectionContainer>
);
