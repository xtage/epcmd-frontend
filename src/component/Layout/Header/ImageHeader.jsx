import { Flex, Image } from "@mantine/core";
import Dep_eco from '../../../assets/Dep_eco.png';
import Yeida from "../../../assets/yeida.png";
import Pharm from "../../../assets/pharm.png";
import Modi from "../../../assets/modi.png";
import JP from '../../../assets/jp.png';
import Logo from '../../../assets/EPCMD LOGO.svg';
const ImageHeader = () => {
  return (
    <Flex justify={"space-around"} mt={'md'}>
      <Image src={Logo} h={"4rem"} />
      <Image src={Dep_eco} h={"4rem"} />
      <Image src={Pharm} h={"4rem"} />
      <Image src={Yeida} h={"4rem"} />
      <Image src={Modi} h={"4rem"} />
      <Image src={JP} h={"4rem"} />
    </Flex>
  );
};

export default ImageHeader;
