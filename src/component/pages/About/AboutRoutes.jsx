import ActivitiesServices from "./components/ActivitiesServices";
import  BriefProfile  from "./components/BriefProfile";
import ChairmanPen from "./components/ChairmanPen";
import FAQ from "./components/FAQ";
import ProductPanels from "./components/ProductPanels";

export const AboutRoutes = [
  {
    path: "/brief-profile",
    element: <BriefProfile />,
  },
  {
    path: "activities-and-services",
    element: <ActivitiesServices />,
  },
  {
    path:'frequently-asked-questions',
    element:<FAQ/>
  },
  {
    path:'product-panels',
    element:<ProductPanels/>
  },
  {
    path:'chairman-pen',
    element:<ChairmanPen/>
  },
];
