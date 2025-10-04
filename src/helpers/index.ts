import { links } from "../data/links";

export function getPageTitle(pathname: string, defaultTitle = "Resolvio") {
    const allLinks = [...links.navMain, ...links.navSecondary, ...links.documents];
    const currentLink = allLinks.find((link) => link.url === pathname);
    return currentLink ? currentLink.title : defaultTitle;
}