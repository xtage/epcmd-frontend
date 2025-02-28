import { ChevronDown } from "lucide-react";
import {
  Burger,
  Center,
  Container,
  Group,
  Menu,
  Stack,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./styles/Header.module.css";
import { useState } from "react";
import Logo from "../../../assets/EPCMD LOGO.svg";

export const links = [
  { link: "/", label: "Home" },
  {
    link: "#1",
    label: "About us",
    links: [
      {
        link: "/about-ecpcmd",
        label: "About ecpcmd",
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
      {
        link: "/executive-committee-election",
        label: "Executive committee election",
      },
    ],
  },
  {
    link: "#2",
    label: "Member",
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
      {
        link: "/membership-query",
        label: "Membership Query",
      },
    ],
  },
  {
    link: "#3",
    label: "Events",
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
      {
        link:'/upcoming-events',
        label:'Upcoming events'
      },
    ],
  },
  {
    link: "#4",
    label: "Statistics/Reports",
    links: [
      {
        link:'/export-statistics',
        label:'Export a glance'
      },
      {
        link:'/stats-and-trade-research',
        label:'Stats and trade research'
      },
      {
        link:'/trade-data-bank',
        label:'Trade data bank'
      },
      {
        link:'/market-reports',
        label:'Market reports'
      },
      {
        link:'/trade-information',
        label:'Trade information'
      },
      {
        link:'/sez',
        label:'SEZ'
      },
    ],
  },
  {
    link:'/gallery',
    label:'Gallery',
  },
  {
    link: "#5",
    label:'Contact us',
    // links: [
    //   {
    //     link:'/contact',
    //     label:'Contact'
    //   },
    //   {
    //     link:'/external-links',
    //     label:'External Links'
    //   },
    // ],
  }
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a href={item.link} className={classes.subLink}>
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => {
                // Prevent navigation for parent links with submenus
                event.preventDefault();
              }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={14} strokeWidth={3} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          {/* <Image src={Logo} w={70} h={70} p={"xs"} fit="contain" /> */}
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
        {opened && (
          <Stack hiddenFrom="sm" className={classes.mobileMenu}>
            {links.map((link) => (
              <div key={link.label}>
                <div
                  className={classes.mobileLink}
                  onClick={() => {
                    if (link.links) {
                      toggleMenu(link.label);
                    } else {
                      // Navigate to the link if no submenu exists
                      window.location.href = link.link;
                    }
                  }}
                >
                  <Group justify="" align="center">
                    <span>{link.label}</span>
                    {link.links && (
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        style={{
                          transform: openMenus[link.label]
                            ? "rotate(180deg)"
                            : "none",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                  </Group>
                </div>
                {link.links && (
                  <Collapse in={openMenus[link.label]}>
                    <Stack className={classes.mobileSubMenu}>
                      {link.links.map((subLink) => (
                        <a
                          key={subLink.label}
                          href={subLink.link}
                          className={classes.mobileSubLink}
                        >
                          {subLink.label}
                        </a>
                      ))}
                    </Stack>
                  </Collapse>
                )}
              </div>
            ))}
          </Stack>
        )}
      </Container>
    </header>
  );
};

export default Header;
