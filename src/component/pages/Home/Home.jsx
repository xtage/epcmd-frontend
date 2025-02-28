import {
  Box,
  Stack,
  Flex,
  Text,
  Divider,
  Title,
  Grid,
  Group,
  Center,
  ScrollArea,
  Button,
  Container,
  Image,
  Anchor,
  Paper,
} from "@mantine/core";
import { useState } from "react";

import {
  CalendarDays,
  FileChartColumn,
  IdCard,
  FileText,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import HeroCarousel from "../../Layout/HeroCarousel/HeroCarousel";
import SimpleCard from "./components/SimpleCard";
import { SimpleCardData, Events, Policy, EStore, Glance } from "./data";
import { CarouselSlide } from "@mantine/carousel";
import AwardCarousel from "./components/AwardCarousel";
import classes from "./styles/Home.module.css";
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Web from "../../../assets/Web.png";
import Icon from "../../../assets/Icon.png";

const Home = () => {
  const [value, setValue] = useState(new Date());
  // const handleNextMonth = () => {
  //   if (value) {
  //     const newDate = new Date(value);
  //     newDate.setMonth(newDate.getMonth() + 1);
  //     setValue(newDate);
  //   }
  // };

  // const handlePreviousMonth = () => {
  //   if (value) {
  //     const newDate = new Date(value);
  //     newDate.setMonth(newDate.getMonth() - 1);
  //     setValue(newDate);
  //   }
  // };

  const handleNextMonth = () => {
    const newDate = new Date(value); // Create a copy of the current date
    newDate.setMonth(newDate.getMonth() + 1); // Increment the month by 1
    setValue(newDate); // Update the state with the new date
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(value); // Create a copy of the current date
    newDate.setMonth(newDate.getMonth() - 1); // Decrement the month by 1
    setValue(newDate); // Update the state with the new date
  };
  const formattedDate = value.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Box>
      <Box p={"2rem"}>
        <HeroCarousel />
      </Box>
      <Service />
      <Box bg={"#D2F4FF"} p={"3rem"}>
        <Box mb={"lg"}>
          <Title order={2} ta={"center"} fw={600} fz={36}>
            Photo Gallery
          </Title>
        </Box>
        <Gallery />
      </Box>
      <Box p={"2rem"}>
        <Box>
          <Title order={2} ta={"center"} fw={600} fz={36}>
            Events
          </Title>
        </Box>
        <Flex gap={"xl"} mt={"lg"}>
          <Box w={"50%"}>
            <Flex
              justify={"center"}
              gap={"xs"}
              p={"xs"}
              align={"center"}
              bg={"#F8F9FA"}
            >
              <ArrowLeft
                size={20}
                onClick={handlePreviousMonth}
                style={{ cursor: "pointer" }}
              />
              {/* <MonthPickerInput
                placeholder="Pick date"
                value={value}
                onChange={setValue}
              /> */}
              <Text>{formattedDate}</Text>
              <ArrowRight
                size={20}
                onClick={handleNextMonth}
                style={{ cursor: "pointer" }}
              />
            </Flex>
            <ScrollArea
              type="always"
              h={300}
              offsetScrollbars
              scrollbars="y"
              classNames={classes}
              mt={"md"}
              p={"md"}
            >
              <Stack>
                {Events.map((item, index) => (
                  <Flex gap={10} key={index}>
                    <Flex justify={"space-between"} w={"10%"}>
                      <Text>{item.date}</Text>
                      <Divider
                        orientation="vertical"
                        size={"md"}
                        color="#00BCF6"
                      />
                    </Flex>

                    <Flex
                      justify={"space-between"}
                      align={"flex-start"}
                      w={"100%"}
                    >
                      <Box w={"70%"}>
                        <Text fw={600} fz={16}>
                          {item.title}
                        </Text>
                        <Text fw={400} fz={14}>
                          {item.address}
                        </Text>
                      </Box>
                      <Button variant="outline" c={"#223E7E"} radius={"md"}>
                        Know More
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </Stack>
            </ScrollArea>
          </Box>
          <Flex justify={"center"} align={"center"} w={"50%"}>
            <Image src={Web} w={300} h={300}></Image>
          </Flex>
        </Flex>
      </Box>

      <Box p={"2rem"}>
        <Grid>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
              <Box className={classes.news} p={"1.5rem"}>
                <Box className={classes.topColor} />
                <Text ta={"center"} mt={"xs"}>
                  News/ Press release/ Circulars
                </Text>
              </Box>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Government announces new healthcare reforms to improve rural
                  medical services.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  New guidelines released for medical waste management in
                  hospitals.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Annual health report shows significant improvement in life
                  expectancy.
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
              <Box className={classes.news} p={"1.5rem"}>
                <Box className={classes.topColor} bg={"#209116"} />
                <Text ta={"center"} mt={"xs"}>
                  Social
                </Text>
              </Box>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Community health workers celebrated for their efforts during
                  the pandemic.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Local NGO organizes free health camp for underprivileged
                  communities.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Social media campaign raises awareness about mental health
                  issues.
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
              <Box className={classes.news} p={"1.5rem"}>
                <Box className={classes.topColor} bg={"#ff725e"} />
                <Text ta={"center"} mt={"xs"}>
                  Blogs
                </Text>
              </Box>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  Top 5 innovations in healthcare technology to watch in 2025.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  How telemedicine is transforming rural healthcare access.
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Text>
                  The role of AI in predicting and preventing disease outbreaks.
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
      </Box>

      <Box bg={"#D2F4FF"} p={"3rem"}>
        <Container>
          <Box mb={"lg"}>
            <Title order={2} ta={"center"} fw={600} fz={36}>
              EPCMD at a glance
            </Title>
          </Box>
          <Grid>
            {Glance.map((item, index) => (
              <Grid.Col span={6}>
                <Paper
                  shadow="sm"
                  radius="md"
                  withBorder
                  h={200}
                  pos={"relative"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box bg={"red"} />
                  <Stack gap={"xs"} justify={"center"} align={"center"}>
                    <item.icon size={50} />
                    <Stack gap={0} mt={'lg'}> 
                      <Text fw={400} fz={20} ta={"center"}>
                        {item.title}
                      </Text>
                      <Text fw={600} fz={25} ta={"center"}>
                        {item.count}
                      </Text>
                    </Stack>
                  </Stack>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
