import type { SiteConfig } from "../types";

/**
 * Central site configuration. Edit key site details.
 *
 * Change the site name, contact details, social links,
 * form endpoints and SEO defaults here.
 *
 * The production URL is set in `astro.config.mjs` (or the SITE_URL env var).
 * If you're looking for other content, see `src/data/` files, including faq.ts, navigation.ts, schedule.ts, and home.ts.
 */

export const site: SiteConfig = {
  name: "Green Level High School Visual Arts and Dance Boosters",
  logoText: "GLHS Visual Arts & Dance Boosters",
  tagline: "Green Level High School Visual Arts and Dance Boosters",
  description:
    "Green Level Visual Arts Dance Boosters Inc. is a registered 509(a)(2) public charity dedicated to supporting the arts at Green Level High School.",
  footerAbout:
    "GLHS Visual Arts and Dance Boosters, Inc. is a tax-exempt 501(c)(3) organization (EIN: 42-3012438). Contributions are tax-deductible as allowed by law. We are a separate organization from Green Level High School and the Wake County Public School System.",
  lang: "en",
  locale: "en_US",

  // Demo mode keeps the placeholder address and phone number out of structured data.
  isDemo: false,

  contact: {
    email: "contact@glhsvad.org",
    phone: "(919) 694-9222",
    phoneHref: "9196949222",
    address: {
      street: "7600 Roberts Rd.",
      locality: "Cary",
      region: "NC",
      postalCode: "27519",
      country: "USA",
    },
  },

  // Replace these with profile URLs.
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/g_l_dance",
      icon: "camera",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/nahs.glhs",
      icon: "camera",
    },
    { label: "Email", href: "mailto:contact@glhsvad.org", icon: "mail" },
    {
      label: "Website",
      href: "https://greenlevelhs.wcpss.net/",
      icon: "globe",
    },
    { label: "Viz Arts",
      href: "https://glarts.weebly.com/",
      icon: "globe",
    },
    { label: "Dance",
      href: "https://glhsdance.org",
      icon: "globe",
    }
    // { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'play' },
  ],

  bookingUrl: "https://glhsdance.ludus.com/",

  forms: {
    // e.g. 'https://formspree.io/f/your-form-id' — see README › Contact form.
    contactAction: "",
    newsletterAction: "",
  },

  seo: {
    defaultTitle: "Green Level High School Visual Arts and Dance Boosters",
    titleSeparator: "|",
    ogImage: "/og-default.jpg",
    ogImageAlt: "GLHS Dancers performing on stage",
    twitterHandle: "",
    themeColor: "#F5F4F1",
  },

  copyright: "Green Level Visual Arts Dance Boosters Inc.",
};
