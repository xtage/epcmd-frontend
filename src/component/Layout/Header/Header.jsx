import { ChevronDown } from "lucide-react";
import {
  Burger,
  Center,
  Container,
  Group,
  Menu,
  Stack,
  Collapse,
  Divider,
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
        link: "/about-epcmd",
        label: "About EPCMD",
      },
      {
        link: "/what-we-do",
        label: "What we do",
      },
      {
        link: "/mission-vision",
        label: "Mission & vision",
      },
      {
        link: "/committee-of-administration",
        label: "Committee of administration",
      },
      {
        link: "/product-panel",
        label: "Product Panel",
      },
      {
        link: "/chairmans-message",
        label: "Chairman's message",
      },
      {
        link: "/officials-of-epcmd",
        label: "Official's of EPCMD",
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
        link: "",   //TODO THIS WILL BE A LINK TO ONLINE RCMC PAGE WHICH HAVE A DOCUMENT TO BE
        label: "Online RCMC",
        target: "_blank",
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
      // {
      //   link:'/exhibition',
      //   label:'Exhibition',
      //   // links: [
        
      //   // ]
      // },
      {
        link:'/exhibition-in-india',
        label:'Exhibition in India'
      },
      {
        link:'/exhibition-in-abroad',
        label:'Exhibition in Abroad'
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
    label: "Knowledge Documents",
    links: [
      {
        link:'/medical-device-policy',
        label:'Medical Device Policy'
      },
      {
        link:'/mai-assistance',
        label:'MAI Assistance'
      },
      {
        link:'/indian-mission-abroad',
        label:'Indian mission abroad'
      },
      {
        link:'/overseas-missions-in-india',
        label:'Overseas missions in India'
      },
      {
        link:'/medical-device-trade-associations',
        label:'Medical device trade associations'
      },
      {
        link:'/visa',
        label:'Visa'
      },
      {
        link:'/strategy-paper',
        label:'Strategy Paper'
      },
      {
        link:'/annual-reports',
        label:'Annual Reports'
      },
      {
        link:'/publications',
        label:'Publications'
      },
    ],
  },
  {
    link:'#',
    label:'Policy Info',
    links: [
      {
        link:'/rodttep',
        label:'RODTEP'
      },
      {
        link:'/foreign-trade-policy',
        label:'Foreign Trade policy'
      },
      {
        link:'/circular-om-from-doc',
        label:'Circular/OM from DOC'
      },
      {
        link:'/circular-om-from-dop',
        label:'Circular/OM from DOP'
      },
      {
        link:'/circular-om-from-other-ministries',
        label:'Circular/OM from Other ministries'
      },
      {
        link:'/hs-codes',
        label:'HS Codes'
      },
      {
        link:'/msme-scheme',
        label:'MSME Scheme'
      },
      {
        link:'/mai-scheme',
        label:'MAI Scheme'
      },
      {
        link:'/medical-device-scheme',
        label:'Medical Device Scheme'
      },
      {
        link:'/certificate-of-origin',
        label:'Certificate of Origin'
      },
      {
        link:'/guidelines-of-reimbursement-of-airfare',
        label:'Guidelines of Reimbursement of Airfare'
      },
      {
        link:'/customs-exchange-rate',
        label:'Customs Exchange Rate'
      },
    ]
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
        <Divider size={'xs'} />
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
