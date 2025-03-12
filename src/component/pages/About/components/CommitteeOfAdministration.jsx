import {
  Paper,
  Text,
  Box,
  Flex,
  Title,
  Card,
  Skeleton,
  Grid,
} from "@mantine/core";

import SearchBar from "../../../common/component/SearchBar/SearchBar";
import { Search } from "lucide-react";

const CommitteeOfAdministration = () => {
  const data = [
    { id: 1, name: "Emma", designation: "Backend Developer" },
    { id: 2, name: "Bob", designation: "Software Engineer" },
    { id: 3, name: "Jack", designation: "DevOps Engineer" },
    { id: 4, name: "Grace", designation: "Business Analyst" },
    { id: 5, name: "Charlie", designation: "QA Engineer" },
    { id: 6, name: "David", designation: "System Architect" },
    { id: 7, name: "Hannah", designation: "UX Designer" },
    { id: 8, name: "Ian", designation: "Product Manager" },
    { id: 9, name: "Alice", designation: "Data Scientist" },
    { id: 10, name: "Frank", designation: "Software Engineer" },
  ];
  return (
    <Paper className="relativePositioning" p={"lg"}>
      <Box>
        <Text>
          The Committee Administration oversees the governance and strategic
          decision-making processes within the organization. It ensures smooth
          operations, policy implementation, and compliance with organizational
          goals and regulations.
        </Text>
      </Box>
      <Box mt={"2rem"}>
        <Flex justify={"space-between"}>
          <Box>
            <Title order={3}>COMMITTEES MEMBERS</Title>
          </Box>
          <Box w={"30%"}>
            <SearchBar leftSection={<Search/>} placeholder="Search name or designation" />
          </Box>
        </Flex>

        <Grid mt={"xl"}>
          {data.map((item) => (
            <Grid.Col key={item.id} span={3}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Skeleton w={"100%"} height={100} animate={false} />
                </Card.Section>
                <Text fw={500} ta={"center"} mt="md">
                  {item.name}
                </Text>

                <Text size="sm" c="dimmed" ta={"center"} mt="sm" mb="xs">
                  {item.designation}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default CommitteeOfAdministration;
