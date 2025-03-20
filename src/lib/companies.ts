export interface Company {
  name: string;
  logo: string;
  description: string;
}

export const companies: Company[] = [
  {
    name: "Virgin Australia",
    description: "Creating irresistible exercise experiences",
    logo: "/australia.png",
  },
  {
    name: "Virgin Active Italy",
    description: "Discover irresistible training",
    logo: "/active.png",
  },
  {
    name: "Virgin Atlantic",
    description: "Everyone can take on the world",
    logo: "/atlantic.png",
  },
  {
    name: "Virgin Galactic",
    description: "The spaceline for Earth",
    logo: "/galactic.png",
  },
  {
    name: "Virgin Mobile Poland",
    description: "Saving you from second rate service",
    logo: "/mobile.png",
  },
  {
    name: "Virgin Hotels",
    description: "Everyone leaves feeling better",
    logo: "/hotels.png",
  },
];
