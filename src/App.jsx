import { Box, Flex, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRoutes, useLocation } from "react-router";

import Footer from "./component/Layout/Footer/Footer";
import Header from "./component/Layout/Header/Header";
import Home from "./component/pages/Home/Home";
import { AboutRoutes } from "./component/pages/About/AboutRoutes";
import PreHeader from "./component/Layout/Header/PreHeader";
import ImageHeader from "./component/Layout/Header/ImageHeader";
import PageSideBar from "./component/Layout/PageSideBar/PageSideBar";
import { links } from "./component/Layout/Header/Header";
import classes from "./component/pages/About/styles/About.module.css";
import { getPageTitle } from "./lib/method/getPageTitle";
import { Events } from "./component/pages/Events/EventsRoutes";
import NameHeader from "./component/Layout/Header/NameHeader";
import { MemberRoutes } from "./component/pages/Member/MemberRoutes";

const App = () => {
  const location = useLocation();
  const [pageLinks, setPageLinks] = useState([]);

  const queryClient = new QueryClient();
  useEffect(() => {
    const activeMenu = links.find((item) =>
      item.links?.some((sub) => sub.link === location.pathname)
    );

    setPageLinks(activeMenu ? activeMenu.links : []);
  }, [location.pathname]);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    ...AboutRoutes,
    ...Events,
    ...MemberRoutes
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Flex direction={"column"} h={"100vh"}>
        <PreHeader />
        <NameHeader/>
        <ImageHeader />
        <Header />
        {location.pathname != "/" && (
          <Box className={classes.pageTitle}>
            <Box className={classes.patternOverlay}></Box>
            <Title>
              {getPageTitle(location.pathname)}
            </Title>
          </Box>
        )}
        <Flex style={{ flex: 1 }}>
          {/* {pageLinks.length > 0 && (
            <Box style={{ flexShrink: 0 }} px={"2rem"}>
              <PageSideBar menuLinks={pageLinks} />
            </Box>
          )} */}
          <Box style={{ flex: 1, overflowY: "hidden" }}>{routes}</Box>
        </Flex>
        <Footer />
      </Flex>
    </QueryClientProvider>
  );
};

export default App;
