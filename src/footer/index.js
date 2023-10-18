import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const FooterContainer = styled(Parallax)`
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: #000;
  text-align: center;
  color: #efefef;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export const Footer = () => (
  <FooterContainer shouldAlwaysCompleteAnimation translateY={[20, 0]}>
    Copyright &copy; <span style={{ color: "#ffa500" }}>Anoop Santhanam</span>{" "}
    {new Date().getFullYear()} &bull; Website designed, developed, and
    maintained by Anoop Santhanam
  </FooterContainer>
);
