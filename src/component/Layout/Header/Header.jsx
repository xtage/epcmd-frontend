import { ChevronDown  ,ChevronRight} from "lucide-react";
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
         link: "/documents-need ",
          label: "Documents Need"
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
      {
        label:'Exhibitions',
        link:'##',
        links: [
          {
            link:'/exhibition-in-india',
            label:'Exhibition in India'
          },
          {
            link:'/exhibition-in-abroad',
            label:'Exhibition in Abroad'
          },
        ]
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
    link: "/contact-us",
    label:'Contact us',
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

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            {links.map((link) => (
              <div key={link.label}>
                {link.links ? (
                  <Menu width={200} shadow="md" position="bottom-start"  trigger={'hover'} closeOnItemClick={false}>
                    <Menu.Target>
                      <a href={link.link} className={classes.normalLink}>
                        <Center>
                          <span>{link.label}</span>
                          <ChevronDown size={14} strokeWidth={3} />
                        </Center>
                      </a>
                    </Menu.Target>
                    <Menu.Dropdown className={classes.submenuDropdown}>
                      {link.links.map((subLink) => (
                        <div key={subLink.label}>
                          {subLink.links ? (
                            <Menu width={200} shadow="md" position="right-start" trigger="hover" closeOnItemClick={false}>
                              <Menu.Target>
                                <Menu.Item  rightSection={<ChevronRight size={14} onClick={(e) => e.preventDefault()} />}> 
                                  {subLink.label}
                                </Menu.Item>
                              </Menu.Target>
                              <Menu.Dropdown className={classes.nestedSubmenuDropdown}>
                                {subLink.links.map((nestedLink ,index) => (
                                  <Menu.Item key={nestedLink+index}  component="a" href={nestedLink.link} className={classes.nestedSubmenuLink}>
                                    {nestedLink.label}
                                  </Menu.Item>
                                ))} 
                              </Menu.Dropdown>
                            </Menu>
                          ) : (
                            <Menu.Item key={subLink.label} component="a" href={subLink.link} className={classes.submenuLink}> 
                              {subLink.label}
                            </Menu.Item>
                          )}
                        </div>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                ) : (
                  <a href={link.link} className={classes.normalLink}>{link.label}</a>
                )}
              </div>
            ))}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
