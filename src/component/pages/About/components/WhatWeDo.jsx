import { Box, Flex, Paper, Skeleton, Text, Title } from "@mantine/core";
const WhatWeDo = () => {
  const PRIMARY_COL_HEIGHT = "400px";

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
          <Title order={3}>WHAT WE DO?</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            incidunt natus harum ab modi ut, consequatur nam dolorum magnam
            excepturi quam, ea nesciunt! Recusandae obcaecati corrupti animi
            delectus ea odit atque, vel aperiam impedit sequi iste numquam eos
            repudiandae consequatur porro dolores, natus commodi provident
            voluptatibus quod ipsam quo ab!lorem100 Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Corporis quos eum dicta iure itaque,
            corrupti nihil. Assumenda libero nulla, inventore itaque aspernatur
            exercitationem offcessitatibus reiciendis veritatis optio, sapiente
            illum quaerat quasi et praesentium aut numquam.icia corporis
            molestias a eius omnis, iste, accusamus reprehenderit. Ratione error
            maxime nesciunt neque dolores saepe quam eveniet at explicabo,
            accusantium unde recusandae corporis eius debitis officiis dolor
            impedit vero, soluta vel officia autem. Laudantium dolorum magni sed
            numquam eligendi? Eos beatae sapiente adipisci, dolor ad dolores
            alias accusamus repudiandae officiis! Rem, rerum. Id quam cupiditate
            quo hic similique? Unde tempora soluta sed omnis, repellat ne Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Corporis quos
            eum dicta iure itaque, corrupti nihil. Assumenda libero nulla,
            inventore itaque aspernatur exercitationem offcessitatibus
            reiciendis veritatis optio, sapiente illum quaerat quasi et
            praesentium aut numquam.icia corporis molestias a eius omnis, iste,
            accusamus reprehenderit. Ratione error maxime nesciunt neque dolores
          </Text>
        </Box>
      </Flex>
    </Paper>
  );
};

export default WhatWeDo;
