import { Link, useLocation } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button, Stack, Text, Box } from "@mantine/core";

import classes from "./PageSideBar.module.css";

export default function PageSideBar({ menuLinks }) {
  const location = useLocation();

  const links =
    menuLinks.length > 0 &&
    menuLinks.map((item) => (
      <Link
        to={item.link}
        key={item.label}
        data-active={location.pathname === item.link ? "" : classes.active}
        className={`${classes.link}`}
      >
        <Text w={"80%"}>{item.label}</Text>
        <ChevronRight size={20} />
      </Link>
    ));

  return (
    <Stack pos={"sticky"} top={"70px"} mt={"2rem"}>
      <Button
        radius={"md"}
        bg={"#09367a"}
        size="lg"
        leftSection={<ChevronLeft />}
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
      <nav className={classes.navbar}>
        <Box className={classes.navbarMain}>{links}</Box>
      </nav>
    </Stack>
  );
}
