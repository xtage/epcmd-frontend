import { links } from "../../component/Layout/Header/Header";

const getPageTitle = (pathname) => {
  for (const item of links) {
    if (item.link === pathname) {
      return item.label;
    }
    if (item.links) {
      const subItem = item.links.find((sub) => sub.link === pathname);
      if (subItem) return subItem.label;
    }
  }
  return "Page Not Found";
};
export { getPageTitle };
