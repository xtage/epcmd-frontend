import { Card as MatineCard, Image, Text, Flex ,Title} from "@mantine/core";
import { Box } from "@mantine/core";
import { ArrowRight ,CalendarDays } from "lucide-react";

import classes from "../styles/Card.module.css";

const Card = ({ imageSrc, title }) => {
  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.imgWrapper}>
          <Box className={classes.wrapper}>
            <img
              src={imageSrc}
              className={classes.img}
              h={160}
              radius={"md"}
              alt="Card image"
            />
          </Box>
        </Box>
        <a href="#" className={classes.publicationBtn}>
          <ArrowRight />
        </a>
        <Box className={classes.content}>
            <a>{title}</a>
        </Box>
      </Box>
      <Box>
        <Flex gap={5} align="center">
            <CalendarDays size={16} color="#1082d7" />
            <Text ff={500} fz={16} ta={"center"}>
                12th - 14th March 2022
            </Text>
        </Flex>
      </Box>
      <Box>
        <Text fz={'25px'} c={'#09367a'} fw={500}>Hannover Messe 2025</Text>
      </Box>
    </Box>
  );
};
export default Card;
