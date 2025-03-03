import { ActionIcon, Container, Group, Text, Image } from "@mantine/core";
import { Instagram } from "lucide-react";

import classes from "./Footer.module.css";
import Logo from "../../../assets/Footer.png";
import FooterBG from '../../../assets/FooterBG.png'

const data = [
  {
    title: "About",
    links: [
      {
        link: "/about-epcmd",
        label: "About epcmd",
      },
      {
        link: "/what-we-do",
        label: "What we do",
      },
      {
        link: "/mission-vision",
        label: "Mission & Vision",
      },
      {
        link: "/executive-committee",
        label: "Executive Committee",
      },
      {
        link: "/govertance-committees",
        label: "Govt committees",
      },
      
    ],
  },
  {
    title: "Events",
    links: [
      {
        link:'/exhibition',
        label:'Exhibition'
      },
      {
        link:'/webinar',
        label:'Webinar'
      },
      {
        link:'/technical-conference',
        label:'Technical conference'
      },
      {
        link:'/trade-show',
        label:'Trade show'
      },
      {
        link:'/event-calender',
        label:'Event calender'
      },
    ],
  },
  {
    title: "Members",
    links: [
      { 
        link: "/how-to-apply",
         label: "How to apply" 
        },
      {
        link: "/become-a-member",
        label: "Become a member",
      },
      {
         link: "/document-need ",
          label: "Document Need" 
        },
      {
         link: "/fee-structure", 
         label: "Fee structure"
         },
      {
        link: "/membership-benefits",
        label: "Membership Benefits",
      },
      {
        link: "/directory",
        label: "Directory",
      },
    ],
  },
];

function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        c={"gray"}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text c={"gray"} className={classes.title}>
          {group.title}:
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} >
      <Container className={classes.inner} bg={`url(${FooterBG})`}>
        <div className={classes.logo}>
          <Image src={Logo} p={"xs"} fit="contain" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 EPCMD. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Instagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Instagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Instagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
