import { ProjectCommentsProps } from "@/app/_components/project/comments";
import { people } from "./people";

export type Post = {
  id: string;
  title: string;
  description: string;
  author: {
    avatar?: string;
    name: string;
    isVirginEmployee: boolean;
  };
  createdAt: string;
  likes: number;
  dislikes: number;
  comments: ProjectCommentsProps["comments"];
};

const mockComments: ProjectCommentsProps["comments"] = [
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "This is absolutely amazing! I can't believe how well this turned out. Definitely keeping an eye on future updates!",
    mood: "excited",
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "I adore everything about this. It's exactly what I've been looking for all this time. You've made my day!",
    mood: "loved",
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "Great work on this! It's really well done and I appreciate all the thought that went into it.",
    mood: "happy",
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "I'm not sure about this one. It seems like there are some issues that need to be addressed before it's ready.",
    mood: "excited",
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "Solid effort! This is definitely a step in the right direction. Looking forward to seeing what comes next.",
    mood: "thumbsy",
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "Interesting concept but I don't have strong feelings either way. Could go either direction with some tweaks.",
    mood: null,
  },
  {
    author: people[Math.floor(Math.random() * people.length)]!,
    content:
      "This is exactly what I needed today! The quality is outstanding and I'm already recommending it to friends!",
    mood: "excited",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "A push for bio-fuel investments",
    description: `
Biofuels offer a compelling solution for aviation sustainability, reducing lifecycle greenhouse gas emissions by 60-80% compared to conventional jet fuels. Research in Environmental Science & Technology confirms these fuels not only decrease carbon intensity but also reduce harmful particulate and sulfur emissions. Additionally, domestically produced aviation biofuels enhance energy security while creating economic opportunities in rural communities. As the aviation sector works to meet climate targets, these sustainable fuels provide an immediate advantage by being compatible with existing aircraft and fueling infrastructure.
      `,
    author: {
      name: "John Doe",
      isVirginEmployee: false,
    },
    createdAt: "2025-03-16",
    likes: 144,
    dislikes: 19,
    comments: mockComments,
  },
  {
    id: "2",
    title: "Bio-fuel to fight climate change!",
    description: `
Sustainable aviation fuels derived from biological sources represent a promising path toward reducing the environmental impact of air travel, with studies in Environmental Science & Technology showing they can cut lifecycle greenhouse gas emissions by 60-80% compared to traditional jet fuel. Beyond carbon reductions, these alternative fuels produce fewer particulate matter and sulfur emissions that contribute to air pollution. Producing biofuels domestically strengthens energy independence while generating economic benefits for agricultural regions. A key advantage of aviation biofuels is their drop-in capability, allowing immediate adoption without requiring modifications to current aircraft or fuel distribution systems as the industry pursues its climate objectives.
      `,
    author: {
      name: "Johnathan Doe",
      isVirginEmployee: true,
    },
    createdAt: "2025-03-16",
    likes: 144,
    dislikes: 19,
    comments: mockComments,
  },
  {
    id: "3",
    title: "Reusable/sustainable wine corks?",
    description: `
        I've noticed that we're still using single-use plastic corks in our business class cabins. Given our commitment to sustainability, I believe we should consider switching to reusable corks made from sustainable materials.
        
        This small change could significantly reduce our plastic waste and demonstrate our dedication to eco-friendly practices. I'd be happy to provide more information on suppliers and cost comparisons if needed.
      `,
    author: {
      name: "Sarah Johnson",
      isVirginEmployee: false,
    },
    createdAt: "2025-03-18",
    likes: 89,
    dislikes: 5,
    comments: mockComments,
  },
  {
    id: "4",
    title: "Flight attendant recognition program",
    description: `
          I'd like to suggest implementing a recognition program for exceptional flight attendants. On my last three flights, the crew has been absolutely phenomenal.
          
          Perhaps passengers could nominate attendants who provide outstanding service, with monthly awards for those who receive the most nominations.
      `,
    author: {
      name: "Michael Chen",
      isVirginEmployee: false,
    },
    createdAt: "2025-03-15",
    likes: 211,
    dislikes: 2,
    comments: mockComments,
  },
  {
    id: "5",
    title: "Addressing delays at London Heathrow",
    description: `
          As an operations manager, I'm aware of the recurring delays on our London Heathrow routes. I believe we need to reassess our scheduling to account for the consistently congested taxiways.
          
          I've compiled data from the last six months showing that adding a 20-minute buffer would significantly improve our on-time performance without substantially affecting our scheduling.
      `,
    author: {
      name: "Robert Williams",
      isVirginEmployee: true,
    },
    createdAt: "2025-03-12",
    likes: 56,
    dislikes: 8,
    comments: mockComments,
  },
  {
    id: "6",
    title: "Vegetarian meal options need improvement",
    description: `
          The current vegetarian meal options are quite bland and uninspired. As someone who flies frequently for business, I'm tired of getting pasta every single time.
          
          Most competitors offer more varied and flavorful vegetarian choices. Could we please consider expanding our menu? Perhaps consult with chefs who specialize in vegetarian cuisine.
      `,
    author: {
      name: "Priya Patel",
      isVirginEmployee: false,
    },
    createdAt: "2025-03-10",
    likes: 178,
    dislikes: 15,
    comments: mockComments,
  },
  {
    id: "7",
    title: "Carbon offset program transparency",
    description: `
          While I appreciate our carbon offset program, I believe we could improve transparency regarding where exactly these funds go.
          
          As our sustainability manager, I propose creating a detailed quarterly report accessible to all customers, showing the specific projects funded through our offset program and their measurable impact on CO2 reduction.
      `,
    author: {
      name: "Emma Thompson",
      isVirginEmployee: true,
    },
    createdAt: "2025-03-14",
    likes: 122,
    dislikes: 7,
    comments: mockComments,
  },
  {
    id: "8",
    title: "Loyalty program tier adjustment",
    description: `
          The current threshold for gold tier status is unreasonably high compared to industry standards. Most of our competitors require 75,000 miles annually, while we're requiring 100,000.
          
          This discrepancy is causing us to lose high-value customers to competitors. Data from my department shows we could increase retention by 15% by adjusting our tier requirements.
      `,
    author: {
      name: "David Rodriguez",
      isVirginEmployee: true,
    },
    createdAt: "2025-03-11",
    likes: 98,
    dislikes: 23,
    comments: mockComments,
  },
  {
    id: "9",
    title: "App update suggestion",
    description: `
          The mobile app desperately needs an update. It crashes constantly when trying to check in, and the seat selection interface is extremely unintuitive.
          
          I work in software development, and would be happy to provide more detailed feedback on specific UI/UX improvements that would make the app more user-friendly.
      `,
    author: {
      name: "Alex Kim",
      isVirginEmployee: false,
    },
    createdAt: "2025-03-17",
    likes: 167,
    dislikes: 4,
    comments: mockComments,
  },
];
