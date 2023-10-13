import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { SectionContainer } from "../category/common.styles";

const TextContainer = styled(Parallax)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
  height: auto;
`;

const TextTitle = styled.div`
  font-family: "Robot-Light", sans-serif;
  font-size: 50px;
  color: #efefef;
  font-weight: 300;
  text-align: left;
`;

const TextDescription = styled(TextTitle)`
  font-family: "Roboto-thin", sans-serif;
  font-size: 34px;
  font-weight: 100;
  text-align: left;
  margin-top: 32px;

  & > .small {
    font-size: 16px;
  }
`;

export const TechSection = () => (
  <SectionContainer speed={-10}>
    <TextContainer translateY={[60, 0]}>
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
