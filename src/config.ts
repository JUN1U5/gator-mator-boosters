export const SITE = {
  name: "Green Level Dance",
    url: "",
  lang: "en",
  locale: "en_US",

    nav: [
    { label: "Buying", href: "/buying/" },
    { label: "Selling", href: "/selling/" },
    { label: "Areas", href: "/#areas" },
    { label: "Notes", href: "/#notes" },
  ],

    social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  ],
} as const;

export type SiteConfig = typeof SITE;