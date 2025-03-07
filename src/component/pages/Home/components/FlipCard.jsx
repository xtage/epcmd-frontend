import { Card, Text, Title, Image, Flex, Box, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Flip } from "@gfazioli/mantine-flip";
import "@gfazioli/mantine-flip/styles.css";

import Icon from "../../../../assets/Icon.png";
import classes from "../styles/Service.module.css";

const FlipCard = ({image, frontText, backText , color}) => {
  const [flipped, { open, close }] = useDisclosure(false);

  return (
    <div
      onMouseEnter={open}
      onMouseLeave={close}
      style={{
        cursor: "pointer",
      }}
    >
      <Flip h={200} w={'100%'} flipped={flipped}>
        <FrontSide image={image} frontText={frontText} color={color} />
        <BackSide backText={backText} />
      </Flip>
    </div>
  );
};

const FrontSide = ({image ,frontText ,color}) => {
  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      pos={"relative"}
      h={200}

      className={classes.side}
    >
      <Flex direction={"column"} justify="center" align={"center"} p={'md'}>
        <Image src={image} w={80} h={80} alt="Front Image" />
        <Text mt="4rem" ff={'Inter'} fw={400} fz={16} ta={"center"}>
          {frontText}
        </Text>
      </Flex>
      <Box bg={color} className={classes.bottomStrip} />
    </Paper>
  );
};

const BackSide = ({backText}) => {
  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      h={206}
      pos={"relative"}
      bg={"#262A78"}
      className={classes.side}
    >
      <Text mt="xs" ff={'Inter'} fw={400} ta={"center"} c={"white"} p={'md'}>
        {backText}
      </Text>
      {/* <Box bg={"red"} className={classes.bottomStrip} /> */}
    </Paper>
  );
};

export default FlipCard;
