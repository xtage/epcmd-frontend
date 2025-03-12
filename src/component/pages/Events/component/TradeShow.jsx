import { Box, Button, Flex, Paper, SimpleGrid, Skeleton, Text, Title } from "@mantine/core";
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
  

const TradeShow = () => {
  return (
    <Paper className="relativePositioning" p="lg">
      <Title order={3}>Trade Show</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} mt={'md'}>
        {webinarData.map((webinar, index) => (
          <Box key={index} style={{
            boxShadow:'var(--mantine-shadow-lg)',
            borderTop:'5px solid #344CB7',
            borderRadius:'var(--mantine-radius-md)' 
          }} p="xs">
            <Skeleton h={200} animate={false} />
            <Flex gap="lg" py="xs">
              <Flex align="center" gap="xs">
                <Calendar color="#344CB7" />
                <Text c="dimmed">{webinar.date}</Text>
              </Flex>
              <Flex align="center" gap="xs">
                <Clock color="#344CB7" />
                <Text c="dimmed">{webinar.time}</Text>
              </Flex>
            </Flex>
            <Text fw={600} fz={'lg'} ta={'justify'}>{webinar.title}</Text>
            <Text ta={'justify'}>
                {webinar.description}
            </Text>
            <Button size="xs" mt={'xs'} bg={'#344CB7'}>
                Register Now
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

export default TradeShow;
