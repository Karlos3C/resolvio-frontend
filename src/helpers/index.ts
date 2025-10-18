import { useCallback } from "react";
import { links } from "../data/links";

export function getPageTitle(pathname: string, defaultTitle = "Resolvio") {
  const allLinks = [...links.navMain, ...links.navSecondary, ...links.documents];
  const currentLink = allLinks.find((link) => link.url === pathname);
  return currentLink ? currentLink.title : defaultTitle;
}

export function useInitials() {
  return useCallback((fullName: string): string => {
    const names = fullName.trim().split(" ");

    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }, []);
}
