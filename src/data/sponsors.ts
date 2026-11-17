import type { Sponsor } from "../types";

// Add sponsors here. Each item has a `name`, `role`, `image` object, and an array of `socials` objects. The `image` object has a `src` and an `alt` string. Each `socials` object has a `label`, `href`, and an `icon` string.

export const sponsors: Sponsor[] = [
  {
    name: "Owning the Dash",
    role: "Gold Sponsor",
    image: {
      src: "/images/sponsor-dash.png",
      alt: "Dash and Nikki from Owning the Dash",
    },
    socials: [
      {
        label: "Owning the Dash website",
        href: "https://www.owningthedash.com",
        icon: "globe",
      },
    ],
  },
  {
    name: "All In Dance Academy",
    role: "Bronze Sponsor",
    image: {
      src: "/images/sponsor-allin.webp",
      alt: "Miss Sierra from AllIn Dance Academy",
    },
    socials: [
      {
        label: "Website for AllIn Dance",
        href: "https://allindance.com/",
        icon: "globe",
      },
    ],
  },
  {
    name: "Parkside Eyecare",
    role: "Bronze Sponsor",
    image: { src: "/images/sponsor-parkside.jpg", alt: "Various luxury glasses from Parkside Eyecare" },
    socials: [
      {
        label: "Parkside Eyecare website",
        href: "https://www.parksideeyecare.com/",
        icon: "globe",
      },
    ],
  },
  {
    name: "Starpath Dance Academy",
    role: "Bronze Sponsor",
    image: {
      src: "/images/sponsor-starpath.jpg",
      alt: "Starpath dancers listening to their teacher in class",
    },
    socials: [
      {
        label: "StarPath Dance Website",
        href: "https://www.starpathdance.com/",
        icon: "globe",
      },
    ],
  },
];