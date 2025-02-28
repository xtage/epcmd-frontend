import { Flex, Box, Text, UnstyledButton } from "@mantine/core";
import {
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import classes from "./styles/PreHeader.module.css";

function PreHeader() {
  return (
    <Flex justify={"space-between"} className={classes.main} p={'sm'}>
      <Flex gap={"md"}>
        <Flex gap={"0.3rem"} align={"center"} justify={"center"}>
          <Phone color="#05BADD" size={16} />
          <Text c={"#05BADD"}>+91 XXXXX XXXXX</Text>
        </Flex>
        <Flex gap={"0.3rem"} align={"center"} justify={"center"}>
          <Clock color="#05BADD" size={16} />
          <Text c={"#05BADD"}>Mon-Fri: 09:00 AM - 05:00PM</Text>
        </Flex>
      </Flex>
      <Flex gap={"sm"} align={"center"}>
        <UnstyledButton c={"orange"}>
          <b> Member Login </b>
        </UnstyledButton>
        <Text c={"#05BADD"}>|</Text>
        <Text c={"#05BADD"}>Follow us</Text>

        <Facebook color="#05BADD" size={16} />
        <Twitter color="#05BADD" size={16} />
        <Linkedin color="#05BADD" size={16} />
        <Instagram color="#05BADD" size={16} />
      </Flex>
    </Flex>
  );
}

export default PreHeader;
