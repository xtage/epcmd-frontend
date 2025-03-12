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
  BackgroundImage,
} from "@mantine/core";
import { useState } from "react";

import {
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
import EventImage from "../../../assets/bro.png";
import Icon from "../../../assets/Icon.png";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Home = () => {
  const [value, setValue] = useState(new Date());
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
      <Box>
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
          <Paper shadow="md" w={"50%"} radius={"md"}>
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
            <Flex justify={"space-between"} m={"sm"}>
              <Button
                variant="outline"
                leftSection={<IconChevronLeft />}
                size="sm"
                c={"#223E7E"}
                radius={"md"}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                rightSection={<IconChevronRight />}
                size="sm"
                c={"#223E7E"}
                radius={"md"}
              >
                Next
              </Button>
            </Flex>
          </Paper>
          <Flex justify={"center"} align={"center"} w={"50%"}>
            <Image src={EventImage} h={300}></Image>
          </Flex>
        </Flex>
      </Box>

      <Box p={"2rem"}>
        <Grid>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
            <Flex align={'center'} justify={'center'} gap={'sm'} className={classes.news} p={"1.5rem"}>
            <Box className={classes.topColor} bg={'#FFEB00'}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#ff5722" d="M32 15v28H10c-2.2 0-4-1.8-4-4V15z"/><path fill="#ffccbc" d="M14 5v34c0 2.2-1.8 4-4 4h29c2.2 0 4-1.8 4-4V5z"/><path fill="#ff5722" d="M20 10h18v4H20zm0 7h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8z"/></svg>
                <Text ta={"center"} mt={"xs"}>
                  News/ Press release/ Circulars
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Government announces new healthcare reforms to improve rural
                  medical services.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  New guidelines released for medical waste management in
                  hospitals.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Annual health report shows significant improvement in life
                  expectancy.
                </Anchor>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
            <Flex align={'center'} justify={'center'} gap={'sm'} className={classes.news} p={"1.5rem"}>
            <Box className={classes.topColor} bg={"#FFEB00"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="#b3d9e6" d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 30V6h24v24Z"/><path fill="#b3d9e6" d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zm3.22-12H20v4a.8.8 0 1 0 1.59 0v-2.4h5.63a.8.8 0 1 0 0-1.6M8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81z"/></svg>
                <Text ta={"center"} mt={"xs"}>
                  Social
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Community health workers celebrated for their efforts during
                  the pandemic.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Local NGO organizes free health camp for underprivileged
                  communities.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Social media campaign raises awareness about mental health
                  issues.
                </Anchor>
              </Flex>
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper radius="md" withBorder mih={300}>
              <Flex align={'center'} justify={'center'} gap={'sm'} className={classes.news} p={"1.5rem"}>
                <Box className={classes.topColor} bg={"#FFEB00"} />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#00bcd4" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"/><path fill="#b2ebf2" d="M22 18h6v2h-6zm0 4h6v2h-6z"/><path fill="#b2ebf2" d="M10 15v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1m20 11H20V16h10Z"/></svg>
                <Text ta={"center"} mt={"xs"}>
                  Blogs
                </Text>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  Top 5 innovations in healthcare technology to watch in 2025.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  How telemedicine is transforming rural healthcare access.
                </Anchor>
              </Flex>
              <Flex
                gap={"sm"}
                align="center"
                justify={"space-between"}
                p={"md"}
              >
                <Divider orientation="vertical" size={"md"} color="#00BCF6" />
                <Anchor>
                  The role of AI in predicting and preventing disease outbreaks.
                </Anchor>
              </Flex>
            </Paper>
          </Grid.Col>
        </Grid>
      </Box>
      {/* EPCMD at a glance */}
      <Box w={'100%'} >
          <BackgroundImage
              src="https://s3-alpha-sig.figma.com/img/0ef1/9b06/0d265a7532cd5854a3907dafd3d7057c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yx6dSWpBlArgMUR5OcRcAt9j8-knBaj8Slj-n-sppVqSGMCYIfiOxMqBQMSa8QK6ASUIJVZ4LxGezCJj2Z1l60-oBIETcOyYef~3vk48S-AyE2foCcrEl81wE1PgmbdHVFl4-t32h84IBJDZ5qCKVxEiE~vDq~4-IvFYd4aaUSwOLwyQsEldHrbPop03tU22Yj1FVwGS~ozX-ciT6PLypVKCn2qBWY3CBp~7fwAw8Cp29hwxitzjE1n5UHIutn5dS1pU8mjTLqGFlxEfnVgLhn46Vf7uR22kMsXubnwyCx5IHkxHH-LnVzIhUPpsO-Z9GAXAfrcuNBpZbppiCvRD7g__"     
              style={{
                backgroundColor:'rgba(255, 255, 255, 0.6)',
                backgroundBlendMode: 'lighten',
              }}
          >
            <Box mb={"lg"} p={'xl'}>
              <Title order={2} c={'#223E7E'} ta={"center"} fw={600} fz={36}>
                EPCMD at a glance
              </Title>
            </Box>
            <Box c={'white'} style={{
              overflow:'hidden',
            }}>
            <Grid>
              {Glance.map((item, index) => (
                <Grid.Col span={3}>
                  <Paper
                    bg={'transparent'}
                    h={200}
                    c={'black'}
                    pos={"relative"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack gap={"xs"} justify={"center"} align={"center"}>
                      <item.icon size={53} />
                      <Stack gap={0} mt={"lg"}>
                        <Text fw={400} fz={16} ta={"center"}>
                          {item.title}
                        </Text>
                        <Text fw={600} fz={22} ta={"center"}>
                          {item.count}
                        </Text>
                      </Stack>
                    </Stack>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
            </Box>
          </BackgroundImage>
      </Box>
    </Box>
  );
};

export default Home;
