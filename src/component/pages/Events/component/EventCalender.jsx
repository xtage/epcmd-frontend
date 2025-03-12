import {
  Box,
  Stack,
  Flex,
  Text,
  Divider,
  Title,
  ScrollArea,
  Button,
  Image,
  Paper,
} from "@mantine/core";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

import EventImage from "../../../../assets/bro.png";
import { Events } from "../../Home/data";
import classes from '../../Home/styles/Home.module.css'

const EventCalender = () => {
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
    <Paper className="relativePositioning" p="lg">
      <Box p={"2rem"}>
        <Box>
          <Title order={3}>
            Event Calender
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
    </Paper>
  );
};
export default EventCalender;
