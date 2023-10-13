import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

export const SectionContainer = styled(Parallax)`
  width: 100%;
  height: 1024px;
`;

export const Button = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #efefef;
  border-radius: 80px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
