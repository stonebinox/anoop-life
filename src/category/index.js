import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { SectionContainer } from "./common.styles";
import Work1 from "../assets/work-1.png";
import Work2 from "../assets/work-2.png";
import Work3 from "../assets/work-3.png";

import Hobby1 from "../assets/hobby-1.png";
import Hobby2 from "../assets/hobby-2.jpg";
import Hobby3 from "../assets/hobby-3.png";

import Music1 from "../assets/music-1.png";
import Music2 from "../assets/music-2.png";
import Music3 from "../assets/music-3.png";
import Music4 from "../assets/music-4.png";

const CategoryContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Category = styled(Parallax)`
  height: 75vh;
  width: 33%;
  transition: all 0.2s ease;
  cursor: pointer;
  background: url(${({ image }) => image}) center;
  background-size: cover;

  &:hover {
    height: 100vh;
  }
`;

const CategoryCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryTitle = styled.div`
  font-family: "Roboto-Black", sans-serif;
  font-size: 70px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #efefef;
  width: 100%;
  margin: 0 auto;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const workImages = [Work1, Work2, Work3];
const hobbyImages = [Hobby1, Hobby2, Hobby3];
const musicImages = [Music1, Music2, Music3, Music4];

export const CategorySection = () => {
  const [workImage, setWorkImage] = useState(workImages[0]);
  const [hobbyImage, setHobbyImage] = useState(hobbyImages[0]);
  const [musicImage, setMusicImage] = useState(musicImages[0]);

  const changeImages = () => {
    setTimeout(() => {
      setWorkImage(workImages[Math.floor(Math.random() * workImages.length)]);
      setHobbyImage(
        hobbyImages[Math.floor(Math.random() * hobbyImages.length)]
      );
      setMusicImage(
        musicImages[Math.floor(Math.random() * musicImages.length)]
      );

      changeImages();
    }, 3000);
  };

  useEffect(() => {
    changeImages();
  }, []);

  return (
    <SectionContainer speed={-10}>
      <CategoryContainer>
        <Category
          translateX={[-20, 0]}
          shouldAlwaysCompleteAnimation
          image={hobbyImage}
        >
          <CategoryCover>
            <CategoryTitle>Hobbies</CategoryTitle>
          </CategoryCover>
        </Category>
        <Category
          translateY={[20, 0]}
          shouldAlwaysCompleteAnimation
          image={workImage}
        >
          <CategoryCover>
            <CategoryTitle>Tech</CategoryTitle>
          </CategoryCover>
        </Category>
        <Category
          translateX={[20, 0]}
          shouldAlwaysCompleteAnimation
          image={musicImage}
        >
          <CategoryCover>
            <CategoryTitle>Music</CategoryTitle>
          </CategoryCover>
        </Category>
      </CategoryContainer>
    </SectionContainer>
  );
};
