export interface Company {
  name: string;
  logo: string;
  description: string;
}

export const companies: Company[] = [
  {
    name: "Virgin Australia",
    description: "Creating irresistible exercise experiences",
    logo: "/companies/australia.jpg",
  },
  {
    name: "Virgin Active Italy",
    description: "Discover irresistible training",
    logo: "/companies/active.png",
  },
  {
    name: "Virgin Atlantic",
    description: "Everyone can take on the world",
    logo: "/companies/atlantic.png",
  },
  {
    name: "Virgin Galactic",
    description: "The spaceline for Earth",
    logo: "/companies/galactic.jpeg",
  },
  {
    name: "Virgin Mobile Poland",
    description: "Saving you from second rate service",
    logo: "/companies/mobile.png",
  },
  {
    name: "Virgin Hotels",
    description: "Everyone leaves feeling better",
    logo: "/companies/hotels.jpg",
  },
];
