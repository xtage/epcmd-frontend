import { Flex, Box, Text, UnstyledButton } from "@mantine/core";
import {
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { IconBrandX } from '@tabler/icons-react';
import classes from "./styles/PreHeader.module.css";

function PreHeader() {
  return (
    <Flex justify={"space-between"} className={classes.main} p={'sm'}>
      <Flex gap={"md"}>
        <Text fz={'sm'} c={"#344CB7"}>
        Department of Commerce | Dept of Pharma | YEIDA
        </Text>
        {/* <Flex gap={"0.3rem"} align={"center"} justify={"center"}>
          <Phone color="#05BADD" size={16} />
          <Text c={"#05BADD"}>+91 XXXXX XXXXX</Text>
        </Flex> */}
        {/* <Flex gap={"0.3rem"} align={"center"} justify={"center"}>
          <Clock color="#05BADD" size={16} />
          <Text c={"#05BADD"}>Mon-Fri: 09:00 AM - 05:00PM</Text>
        </Flex> */}
      </Flex>
      <Flex gap={"sm"} align={"center"}>
        <UnstyledButton c={"#577BC1"}>
          <b> Member Login </b>
        </UnstyledButton>
        <Text c={"#05BADD"}>|</Text>
        <Text c={"#577BC1"}>Follow us</Text>

        <Facebook color="#577BC1" size={16} />
        <IconBrandX color="#577BC1" size={16} />
        <Instagram color="#577BC1" size={16} />
      </Flex>
    </Flex>
  );
}

export default PreHeader;
