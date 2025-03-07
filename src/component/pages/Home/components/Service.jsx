import { Box, Container, Title, Tabs, Text, Grid, Card } from "@mantine/core";
import { User, UserCheck } from "lucide-react";
import classes from "../styles/Service.module.css";
import FlipCard from "./FlipCard";
import { MemberCardData } from "../data";

const Service = () => {
  return (
    <Box px={"5rem"} mb={'xl'}>
      {/* <Container> */}
        <Title order={4} c={'#223E7E'} ta={"center"} fw={500} fz={42}>
          Our Services
        </Title>
        {/* <Tabs variant="unstyled" defaultValue="member"  classNames={classes} radius={"xl"} >
          <Tabs.List  justify="center"  
           >
            <Tabs.Tab w={200} style={{
            boxShadow:'var(--mantine-shadow-xl)',
            borderRadius:'var(--mantine-radius-md)',
          }} bd={"sm"} c={'black'} value="member" leftSection={<User size={16} />}>
              Member
            </Tabs.Tab> */}
            {/* <Tabs.Tab w={200} style={{
            boxShadow:'var(--mantine-shadow-xl)',
            borderRadius:'var(--mantine-radius-md)',

          }} value="buyer" leftSection={<UserCheck size={16} />}>
              For Buyer
            </Tabs.Tab> */}
          {/* </Tabs.List> */}
          {/* <Tabs.Panel value="member"> */}
            <Grid mt={"xl"} h={"100%"}>
              {MemberCardData.map((card, index) => (
                <Grid.Col
                  key={index}
                  span={index < 2 || index >= MemberCardData.length - 2 ? 6 : 4}
                  >
                  <FlipCard
                    image={card.image}
                    frontText={card.frontText}
                    backText={card.backText}
                    color={card.color}
                  />
                </Grid.Col>
              ))}
            </Grid>
          {/* </Tabs.Panel> */}
         {/* / <Tabs.Panel value="buyer">
            <Grid mt={"xl"}>
              <Grid.Col span={4}>
                <FlipCard
                  image={MemberCardData[0].image}
                  frontText={MemberCardData[0].frontText}
                  backText={MemberCardData[0].backText}
                  color={MemberCardData[0].color}
                />
              </Grid.Col>
            // </Grid> */}
          {/* </Tabs.Panel> */}
        {/* </Tabs> */}
      {/* </Container> */}
    </Box>
  );
};

export default Service;
