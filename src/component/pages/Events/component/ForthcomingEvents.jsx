import { Flex, Paper, Box, Grid } from "@mantine/core";

import SearchBar from "../../../common/component/SearchBar/SearchBar";
import Card from "./Card";

const ForthcomingEvents = () => {
  return (
    <Paper mt={"2rem"}>
      <Flex justify={"center"}>
        <SearchBar placeholder="Search events" size={"md"} w={"50%"} />
      </Flex>

      <Grid mt={"2rem"} mr={'3rem'} ml={'1rem'}>
        <Grid.Col span={6}>
          <Card
            imageSrc={
              "https://www.eepcindia.org/backend/uploads/1732543064.png"
            }
            title={"Kathmandu, Nepal"}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Card
            imageSrc={
              "https://www.eepcindia.org/backend/uploads/1734698528.jpg"
            }
            title={"Kathmandu, Nepal"}
          />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default ForthcomingEvents;
