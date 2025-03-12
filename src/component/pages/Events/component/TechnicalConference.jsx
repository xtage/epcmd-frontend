import {
  Box,
  Flex,
  Paper,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
  Stack
} from "@mantine/core";
import { Calendar, Clock } from "lucide-react";

const webinarData = [
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title:
      "Emerging opportunities in new technologies for manufacturing and exports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
  },
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title:
      "Emerging opportunities in new technologies for manufacturing and exports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
  },
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title:
      "Emerging opportunities in new technologies for manufacturing and exports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
  },
];

const TechnicalConference = () => {
  return (
    <Paper className="relativePositioning" p="lg">
      <Title order={3}>Technical Conference</Title>
      <SimpleGrid cols={1} mt={'lg'}>
        {webinarData.map((webinar, index) => (
          <Paper
            display={"flex"}
            style={{
              borderTop: "5px solid #344CB7",
              gap:'1rem'
            }}
            key={index}
            shadow="lg"
            p="xs"
          >
            <Skeleton h={300} animate={false} />
            <Stack gap="lg" py="xs">
              <Flex gap={'md'}>
                <Flex align="center" gap="xs">
                  <Calendar color="#344CB7" />
                  <Text c="dimmed">{webinar.date}</Text>
                </Flex>
                <Flex align="center" gap="xs">
                  <Clock color="#344CB7" />
                  <Text c="dimmed">{webinar.time}</Text>
                </Flex>
              </Flex>
              <Text>{webinar.title}</Text>
              <Text ta={'justify'}>{webinar.description}</Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

export default TechnicalConference;
