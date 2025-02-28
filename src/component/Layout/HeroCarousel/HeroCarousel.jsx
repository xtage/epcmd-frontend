import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image, Paper, Title, Box } from "@mantine/core";

import classes from "./HeroCarousel.module.css";
import {api} from '../../../lib/api-interceptor'
 
const HeroCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [images, setImages] = useState([]);
 
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get("/homepage/");
        console.log(response.data.carousel_items)
        setImages(response.data.carousel_items);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
 
    fetchImages();
  }, []);
 
  const slides = images.map((image,index) => (
    <Carousel.Slide key={index} >
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image.image_url})` }}
        className={classes.HeroPaper}
      >
        {/* <Box>
          <Title order={4} className={classes.HeroTitle} >
            {image.caption}
          </Title>
        </Box> */}
      </Paper>
    </Carousel.Slide>
  ));
 
  return (
    <Carousel
      withIndicators
      height={300}
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={"md"}
      loop
      plugins={[autoplay.current]}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
};
 
export default HeroCarousel;
