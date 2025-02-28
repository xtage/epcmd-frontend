import { Flex, Image } from "@mantine/core";
import One from "../../../assets/Img1.png";
import Two from "../../../assets/img2.png";
import Three from "../../../assets/img3.png";
import Four from "../../../assets/img4.png";
const ImageHeader = () => {
  return (
    <Flex justify={"space-around"} mt={'md'}>
      <Image src={One} h={"4rem"} />
      <Image src={Two} h={"4rem"} />
      <Image src={Three} h={"4rem"} />
      <Image src={Four} h={"4rem"} />
    </Flex>
  );
};

export default ImageHeader;
