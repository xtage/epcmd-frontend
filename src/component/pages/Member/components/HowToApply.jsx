import { Flex, Paper, Skeleton, Title, Text, Box, Stack, List } from "@mantine/core";

const HowToApply = () => {
  const PRIMARY_COL_HEIGHT = "350px";
  return (
    <Paper className="relativePositioning" p={"lg"}>
      <Flex w={"100%"} gap={"md"}>
        <Box w={"50%"}>
          <Skeleton
            w={"100%"}
            height={PRIMARY_COL_HEIGHT}
            radius="md"
            animate={false}
          />
        </Box>
        <Box w={"50%"}>
          <Title order={3}>Step-by-Step Process</Title>
          <Stack gap={0}>
            <Text>Step 1: Register/Login</Text>
            <List ml={'xs'}>
              <List.Item>Click on the Apply Now button</List.Item>
              <List.Item>Create an account</List.Item>
            </List>
          </Stack>
          <Stack gap={0}>
            <Text>Step 2: Fill Out the Application</Text>
            <List ml={'xs'}>
              <List.Item>Enter your details</List.Item>
              <List.Item>Upload required documents</List.Item>
            </List>
          </Stack>
          <Stack gap={0}>
            <Text>Step 3: Review & Submit</Text>
            <List ml={'xs'}>
              <List.Item>Double-check your details</List.Item>
              <List.Item>Submit the application</List.Item>
            </List>
          </Stack>
          <Stack gap={0}>
            <Text>Step 4: Wait for Confirmation</Text>
            <List ml={'xs'}>
              <List.Item>You’ll receive an email</List.Item>
              <List.Item>Follow the next steps provided</List.Item>
            </List>
          </Stack>
        </Box>
      </Flex>
    </Paper>
  );
};

export default HowToApply;
