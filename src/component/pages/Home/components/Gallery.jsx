import React from "react";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  Box,
  Title,
  Button,
  Image,
} from "@mantine/core";
import classes from "../styles/Home.module.css";

const PRIMARY_COL_HEIGHT = "400px";

const Gallery = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Box
              h={SECONDARY_COL_HEIGHT}
              radius="md"
              className={classes.firstBox}
            >
              <Box pos={"relative"}>
                <Title order={3} fz={"md"}>
                  PHOTO GALLERY
                </Title>
                <Button c={"#191919"} bg={"#fff"} mt={"xs"}>
                  View All
                </Button>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className={classes.boxWrap} h={SECONDARY_COL_HEIGHT}>
              <Box h={"100%"} pos={"relative"}>
                <Image
                  src="https://www.eepcindia.org/backend/gallery/1697612764.jpeg"
                  alt="Gallery img"
                  className={classes.galleryImg}
                />
              </Box>
              <Box className={classes.boxText}>
                MoU signing between KNCCI and EEPC India
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className={classes.boxWrap} h={SECONDARY_COL_HEIGHT}>
              <Box h={"100%"} pos={"relative"}>
                <Image
                  src="https://www.eepcindia.org/backend/gallery/1698732101.jpeg"
                  alt="Gallery img"
                  className={classes.galleryImg}
                />
              </Box>
              <Box className={classes.boxText}>
                Recce Visit for INDEE Bangladesh 2024
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box className={classes.boxWrap} h={SECONDARY_COL_HEIGHT}>
              <Box h={"100%"} pos={"relative"}>
                <Image
                  src="https://www.eepcindia.org/backend/gallery/1697102629.jpeg"
                  alt="Gallery img"
                  className={classes.galleryImg}
                />
              </Box>
              <Box className={classes.boxText}>INDEE Kenya 2023</Box>
            </Box>
          </Grid.Col>
        </Grid>
        <Box className={classes.boxWrap}>
          <Box h={"100%"} pos={"relative"}>
            <Image
              src="https://www.eepcindia.org/backend/gallery/1692171623.jpeg"
              alt="Gallery img"
              className={classes.galleryImg}
            />
          </Box>
          <Box className={classes.boxText}>
            Recce of Kenya prior to INDEE Kenya 2023
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default Gallery;
