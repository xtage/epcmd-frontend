import { Carousel } from "@mantine/carousel";
import {
  Button,
  Paper,
  Title,
  Text,
  Group,
  Box,
  Image,
  Flex,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import classes from "../styles/Home.module.css";

function Card({ image, title, des }) {
  return (
    <Paper shadow="md" p="xl" bg={"#09367a"} className={classes.card}>
      <Box w={"50%"}>
        <Image src={image} w={150} />
      </Box>
      <Box w={"50%"}>
        <Title order={3} fz={"1.70rem"} mb={".5rem"} c={"white"}>
          {title}
        </Title>
        <Text mt={0} mb={"1rem"} c={"white"}>
          {des}
        </Text>
        <Flex justify={"flex-end"}>
          <Button
            leftSection={<ArrowRight size={20} />}
            c={"black"}
            bg={"white"}
          >
            Know more
          </Button>
        </Flex>
      </Box>
    </Paper>
  );
}
const AwardCarousel = () => {
  const data = [
    {
      image: "https://www.eepcindia.org/assets/awards-icon-D6ShbAE8.png",
      title: "43rd National Awards for Export Excellence 2010-11",
      des: "EEPC India - 43rd National Awards for Export ExcellenceThe Council is glad to invite applications...",
    },
    {
      image: "https://www.eepcindia.org/assets/awards-icon-D6ShbAE8.png",
      title: "43rd National Awards for Export Excellence 2010-11",
      des: "EEPC India - 43rd National Awards for Export ExcellenceThe Council is glad to invite applications...",
    },
    {
      image: "https://www.eepcindia.org/assets/awards-icon-D6ShbAE8.png",
      title: "43rd National Awards for Export Excellence 2010-11",
      des: "EEPC India - 43rd National Awards for Export ExcellenceThe Council is glad to invite applications...",
    },
    {
      image: "https://www.eepcindia.org/assets/awards-icon-D6ShbAE8.png",
      title: "43rd National Awards for Export Excellence 2010-11",
      des: "EEPC India - 43rd National Awards for Export ExcellenceThe Council is glad to invite applications...",
    },
  ];
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return <Carousel withControls={false} withIndicators plugins={[autoplay.current]}>{slides}</Carousel>;
};

export default AwardCarousel;
