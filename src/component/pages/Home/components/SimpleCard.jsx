import { Image, Card, Text, Button, Flex, Box, Stack } from "@mantine/core";
import { ArrowRight } from "lucide-react";

import classes from "../styles/Home.module.css";

const SimpleCard = ({ imageSrc, title }) => {
  return (
    <Box pos={"relative"}>
      <Card shadow="sm" className={classes.mainCard} bg={"rgb(208, 232, 250)"}>
        <Card.Section p={"lg"}>
          <Image src={imageSrc} h={160} radius={"md"} alt="Card image" />
        </Card.Section>
        <Text fw={700} fz={"18px"} p={"xs"}>
          {title}
        </Text>
      </Card>
      <a className={classes.publicationBtn}>
        <ArrowRight />
      </a>
    </Box>
  );
};

export default SimpleCard;
