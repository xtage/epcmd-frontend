import ChairmanPen from "./components/ChairmanPen";
import FAQ from "./components/FAQ";
import ProductPanels from "./components/ProductPanels";
import AboutEpcmd from "./components/AboutEpcmd";
import WhatWeDo from "./components/WhatWeDo";
import MissionVision from './components/MissionVision'
import CommitteeOfAdministration from './components/CommitteeOfAdministration'
import OfficialEPCMD from './components/OfficialEPCMD'

export const AboutRoutes = [
  {
    path: "/about-epcmd",
    element: <AboutEpcmd/>,
  },
  {
    path: "/what-we-do",
    element: <WhatWeDo />,
  },
  {
    path:'/mission-vision',
    element:<MissionVision/>
  },
  {
    path:'/committee-of-administration',
    element:<CommitteeOfAdministration/>
  },
  {
    path:'/product-panel',
    element:<ProductPanels/>
  },
  {
    path:'/chairmans-message',
    element:<ChairmanPen/>
  },
  {
    path:'/officials-of-epcmd',
    element:<OfficialEPCMD/>
  }
];
