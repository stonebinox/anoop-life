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
import { checkDisabledStatus } from "../utils/utils";

const CategoryContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 64px;
  }
`;

const Category = styled(Parallax)`
  height: 75vh;
  width: 33%;
  transition: all 0.2s ease;
  cursor: pointer;
  background: url(${({ image }) => image}) center;
  background-size: cover;
  border: 2px solid
    ${({ isSelected }) => isSelected && `rgba(255, 255, 255, 1.0)`};

  &:hover {
    height: 100vh;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 33vh;

    &:hover {
      height: 33vh;
    }
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

export const CategorySection = ({ setCategory, selectedCategory }) => {
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

  const categoryClick = (category) => {
    setCategory(category);

    setTimeout(() => {
      if (document.getElementById(category)) {
        document.getElementById(category).scrollIntoView(true);
      }
    }, 500);
  };

  useEffect(() => {
    changeImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionContainer
      speed={-10}
      shouldAlwaysCompleteAnimation
      disabled={checkDisabledStatus()}
    >
      <CategoryContainer>
        <Category
          translateX={[-20, 0]}
          shouldAlwaysCompleteAnimation
          image={hobbyImage}
          disabled={checkDisabledStatus()}
          onClick={() => categoryClick("hobbies")}
          isSelected={"hobbies" === selectedCategory}
        >
          <CategoryCover>
            <CategoryTitle>Hobbies</CategoryTitle>
          </CategoryCover>
        </Category>
        <Category
          translateY={[20, 0]}
          shouldAlwaysCompleteAnimation
          image={workImage}
          disabled={checkDisabledStatus()}
          onClick={() => categoryClick("tech")}
          isSelected={"tech" === selectedCategory}
        >
          <CategoryCover>
            <CategoryTitle>Tech</CategoryTitle>
          </CategoryCover>
        </Category>
        <Category
          translateX={[20, 0]}
          shouldAlwaysCompleteAnimation
          image={musicImage}
          disabled={checkDisabledStatus()}
          onClick={() => categoryClick("music")}
          isSelected={"music" === selectedCategory}
        >
          <CategoryCover>
            <CategoryTitle>Music</CategoryTitle>
          </CategoryCover>
        </Category>
      </CategoryContainer>
    </SectionContainer>
  );
};
