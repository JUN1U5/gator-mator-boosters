import type { FooterColumn, NavigationItem } from "../types";

/**
 * Primary navigation. Home-page sections use `/#anchor` links so they also
 * work from inner pages such as /contact or /blog.
 */
export const primaryNav: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Dance", href: "https://glhsdance.org" },
  { label: "Visual Arts", href: "https://glarts.weebly.com/" },
  { label: "Sponsors", href: "/#sponsors" },
];

/** Buttons on the right side of the header. Remove an entry to hide it. */
export const headerActions = {
  schedule: {
    label: "Donate",
    ariaLabel: "Donate to GLHS Boosters",
    href: "/#cta-support",
  },
};

export const footerColumns: FooterColumn[] = [
  {
    title: "On Social Media",
    links: [
      { label: "Dance Program", href: "https://www.instagram.com/g_l_dance/" },
      { label: "Dance Team", href: "https://www.instagram.com/gl_danceteam" },
      {
        label: "National Art Honors Society",
        href: "https://www.instagram.com/nahs.glhs",
      },
    ],
  },
  {
    title: "GLHS Visual Arts & Dance Boosters",
    links: [
      { label: "Home", href: "/" },
      { label: "About the Boosters", href: "/about" },
      { label: "Our Sponsors", href: "/#sponsors" },
      { label: "Dance Program", href: "https://glhsdance.org" },
      { label: "Visual Arts", href: "https://glarts.weebly.com/" },
    ],
  },
];

/** Optional legal links. Only add pages that exist (e.g. /privacy). */
export const legalNav: NavigationItem[] = [];
