import type {
  CallToAction,
  GalleryImage,
  HeroWord,
  ImageData,
  VisitStep,
} from "../types";

/**
 * Copy and images for the home-page sections.
 * Lists (classes, schedule, sponsors, pricing, …) live in their own files.
 * A `\n` inside a title becomes a line break.
 */

export const hero = {
  /** Words of the display headline, separated by the animated slashes. */
  title: [
    { text: "Green Level", serif: false },
    { text: "VizArts & Dance Boosters", serif: true },
  ] satisfies HeroWord[],
  description:
    "Welcome to the official site for the Green Level High School Visual Arts and Dance Boosters. We aim to enrich the visual arts & dance educational experience of Green Level High School students through effective support and collaboration with the school faculty and staff.",
  cta: {
    label: "Become a Booster!",
    href: "/#cta-support",
  } satisfies CallToAction,
  image: {
    src: "/images/dance-teal.jpg",
    alt: "Green Level High School dancers perform on stage against a blue-green backdrop",
  } satisfies ImageData,
  proof: {
    label: "Support our community",
    value: "2,283+ Students",
    avatars: [
      { src: "/images/avatar-01.webp", alt: "" },
      { src: "/images/avatar-02.webp", alt: "" },
      { src: "/images/avatar-03.webp", alt: "" },
    ] satisfies ImageData[],
  },
};

export const About = {
  title: "About the Boosters",
  intro:
    "Founded in 2026, the Green Level Visual Arts and Dance Boosters is a 501(c)(3) nonprofit organization that supports the arts at Green Level High School (GLHS). We are a registered public charity, run by volunteers. Because we believe artistic expression enriches lives, our mission is to make dance and visual arts accessible to every student and the broader GLHS community. We do so by partnering with GLHS visual arts and dance faculty to fund and support their programs. Our support has included art materials and equipment; production costs, including costumes, sets, and royalties; guest artists; field trips; and other enrichment opportunities. You can support the arts at Green Level through one-off donations, memberships, and corporate sponsorships. See the Ludus pages below to donate, volunteer, or buy tickets for upcoming events.",
  image: {
    src: "/images/GLHS-1.jpg",
    alt: "The Green Level High School campus, with the school building in the background and a tree in the foreground",
  },
  cta2: { label: "Support Dance", href: "https://glhsdance.ludus.com" },
  cta: {
    label: "Support the Visual Arts",
    href: "https://glhsarts.ludus.com",
  } satisfies CallToAction,
};

export const scheduleSection = {
  title: "Upcoming Dance Events",
  intro:
    "Tickets for upcoming events are available on our Ludus page. Click TICKETS to view availability and payment. Follow us on Instagram for additional announcements and events.",
  note: "For GLHS shows, please show your electronic ticket upon entering the auditorium. These are cashless events. Per WCPSS, the clear bag policy is in effect for all public events.",
  reserveLabel: "Tickets",
};

export const sponsorsSection = {
  title: "Thank You, Sponsors!",
  intro: "Our patrons and sponsors make the arts possible for GLHS students.",
  cta: {
    label: "Become a Sponsor",
    href: "mailto:contact@glhsvad.org",
  } satisfies CallToAction,
};

export const program = {
  title: "About Our Program",
  intro:
    "The Green Level Dance Department offers beginner to advanced dance classes during the school day as a fine arts credit. Our program focuses on teaching Ballet, Modern/Contemporary, Jazz, Tap, and Choreography. We have one concert each semester filled with both student and teacher choreography from all genres.",
  cta: { label: "Register", href: "/#register" } satisfies CallToAction,
};

export const storiesSection = {
  title: "The Arts Are Essential",
  intro:
    "Dance and the visual arts offer valuable benefits in leadership, creative expression, and being part of something bigger.",
};

export const gallery = {
  title: "In the Studio and On Stage",
  intro: "Snapshots from our community.",
  images: [
    {
      src: "/images/GLHS_Dance_2026-249_L.jpg",
      alt: "Silhouette of dancers posing on stage at the Spring Concert",
      caption: "FLUX Solo",
    },
    {
      src: "/images/dance-team.jpg",
      alt: "The Green Level High School Dance Team on the football field at night",
      caption: "Dance Team @gl_danceteam",
    },
    {
      src: "/images/student-art2.jpg",
      alt: "Student artist posing in front of her gallery art",
      caption: "Student artist",
    },
    {
      src: "/images/viz-arts.jpg",
      alt: "Student painting a mural in the school hallway that says we are one",
      caption: "Visual Arts",
    },
    {
      src: "/images/GLHS_DanceSpring25-461_L.jpg",
      alt: "More dancers on stage",
      caption: "Dance",
    },
  ] satisfies GalleryImage[],
};

export const faqSection = {
  title: "Common Questions",
  intro:
    "Questions about the dance program? Here are some common topics, with everything you need to know. Please feel free to reach out with any questions.",
  cta: {
    label: "Contact Ms. Dula",
    href: "mailto:adula2@wcpss.net",
  } satisfies CallToAction,
};

export const journalSection = {
  title: "Resources for Students and Families",
  intro:
    "Practical notes and resources for students, dancers, and family members.",
  cta: { label: "All Resources", href: "/blog" } satisfies CallToAction,
};

export const newsletter = {
  title: "A Calmer Inbox, Once a Week",
  intro:
    "One short practice, one breathing tip and first access to retreat spots every Sunday morning. Unsubscribe anytime.",
  placeholder: "Your email address",
  buttonLabel: "Subscribe",
};

export const cta = {
  /** `{lotus}` renders the small lotus chip. The Mat Is Where\nChange {lotus} Begins',*/
  title: "Green Level Student Artists\nNeed Your Support",
  intro: "Invest in the future of the arts and our Green Level students.",
  button: {
    label: "Become a Visual Arts Booster",
    href: "https://glhsarts.ludus.com",
  } satisfies CallToAction,
  button2: {
    label: "Become a Dance Booster",
    href: "https://glhsdance.ludus.com",
  },
  contactLabel: "Get in touch with us",
  image: { src: "/images/Dance_IMG_3235_L.JPG", alt: "" } satisfies ImageData,
  marquee: { before: "Visual Arts &", emphasis: "Dance Boosters" },
};

// /images/dance-teal.jpg

export const visit = {
  title: "Become a Booster",
  intro:
    "You can support the arts at Green Level through one-off donations, memberships, and corporate sponsorships.",
  cta2: { label: "Donate Now", href: "/#cta-support" },
  cta: {
    label: "Email Us",
    href: "mailto:contact@glhsvad.org",
  } satisfies CallToAction,
  steps: [
    {
      title: "Charitable Tax Deduction",
      icon: "gift",
      description:
        "We are a 501(c)(3) organization, and your donation is tax deductible.",
    },
    {
      title: "Local Advertising",
      icon: "focus",
      description:
        "Business sponsors can reach the local community by advertising in our shows, websites, and social media.",
    },
    {
      title: "Support Students",
      icon: "cap",
      description:
        "By helping our arts programs grow, you're supporting our students, artists, and dancers.",
    },
    {
      title: "Support the Arts",
      icon: "heart",
      description:
        "By supporting the arts at GLHS, you're fostering a creative outlet for students in our community",
    },
  ] satisfies VisitStep[],
};
