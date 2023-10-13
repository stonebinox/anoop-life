import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  LandingSectionContainer,
  VideoContainer,
  VideoContent,
  NameContainer,
  FirstName,
  LastName,
  SectionContent,
  AboutCarouselContainer,
  CarouselItem,
  CarouselTitle,
  CarouselDescription,
} from "./index.styles";
import LandingVideo from "../assets/videos/landing.mp4";

export const LandingSection = () => (
  <LandingSectionContainer speed={-5}>
    <SectionContent>
      <NameContainer>
        <FirstName>ANOOP</FirstName>
        <LastName>SANTHANAM</LastName>
        <AboutCarouselContainer>
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showStatus={false}
            stopOnHover
            swipeable
            transitionTime={300}
            showThumbs={false}
          >
            <CarouselItem>
              <CarouselTitle>About</CarouselTitle>
              <CarouselDescription>
                Masters in Computer Science &bull; Filed Patent &bull;
                Successful Venture Exit &bull; Tech Geek &bull; Musician
              </CarouselDescription>
            </CarouselItem>
            <CarouselItem>
              <CarouselTitle>Principal Engineer</CarouselTitle>
              <CarouselDescription>
                12 years a dev &bull; Former CEO &bull; Former CTO &bull; Full
                Stack Developer &bull; That Neighbour Who Blasts Music &bull; A
                Dev Knight
              </CarouselDescription>
            </CarouselItem>
            <CarouselItem>
              <CarouselTitle>Location</CarouselTitle>
              <CarouselDescription>
                Dubai, UAE but I travel a lot &bull; Digital Nomad &bull;
                Indian-born
              </CarouselDescription>
            </CarouselItem>
          </Carousel>
        </AboutCarouselContainer>
      </NameContainer>
    </SectionContent>
    <VideoContainer>
      <VideoContent
        src={LandingVideo}
        width="100%"
        autoPlay
        muted
        loop
        type="video/mp4"
      />
    </VideoContainer>
  </LandingSectionContainer>
);
