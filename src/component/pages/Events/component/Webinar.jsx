import { Box, Flex, Paper, SimpleGrid, Skeleton, Text, Title } from "@mantine/core";
import { Calendar, Clock } from "lucide-react";

const webinarData = [
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title: "Emerging opportunities in new technologies for manufacturing and exports",
  },
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title: "Emerging opportunities in new technologies for manufacturing and exports",
  },
  {
    date: "24th March 2025",
    time: "24th March 2025",
    title: "Emerging opportunities in new technologies for manufacturing and exports",
  },
];

const Webinar = () => {
  return (
    <Paper className="relativePositioning" p="lg">
      <Title order={3}>Webinar</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} mt={'md'}>
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
            <Text fw={600} fz={'1.25rem'}>{webinar.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

export default Webinar;
