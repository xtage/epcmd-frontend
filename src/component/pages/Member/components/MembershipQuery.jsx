import {
  Box,
  Paper,
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Flex,
  Image,
  Text,
  Container,
  Title,
  Stack
} from "@mantine/core";
import FormImg from "../../../../assets/form.png";
import FAQ from "../../About/components/FAQ";

const MembershipQuery = () => {
  return (
      <Paper className="relativePositioning" p="xl" shadow="md" radius="md">
        <Flex 
          align={{ base: "center", md: "flex-start" }} 
          direction={{ base: "column", md: "row" }} 
          justify="space-between"
          gap="xl"
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Title order={2} mb="md">Membership Query</Title>
            <form>
              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                />
              </SimpleGrid>
              <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
              />
              <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
              />
              <Group justify="flex-start" mt="xl">
                <Button type="submit" size="md">
                  Send message
                </Button>
              </Group>
            </form>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} display="flex" justify="center">
            <Image  src={FormImg} alt="Form illustration" />
          </Box>
        </Flex>
        <Stack mt="xl" p={'xl'} gap={0}>
          <FAQ />
          <Text align="center" size="sm" c="dimmed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Stack>
      </Paper>
  );
};

export default MembershipQuery;