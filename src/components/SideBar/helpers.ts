import { LocationType } from "./types";

// определяем по урлу какой выбран пункт из sidebar
export const getIsActive = (href: string) => {
  return (_: any, location: LocationType): boolean => {
    const [firstHref] = location.pathname.split("/").filter((path) => path);
    const parentHref = href.replace("/", "");

    if (!parentHref && !firstHref) {
      return true;
    }
    return firstHref === parentHref;
  };
};
