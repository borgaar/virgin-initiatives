import InitiativeFeedItem, {
  type FeedItem,
} from "../_components/initiative-feed-item";
import PageContainer from "../_components/page-container";

const items: FeedItem[] = [
  {
    id: "1",
    title: "Save the bees",
    content:
      "Bees are dying at an alarming rate. We need to take action to save them. I suggest Virgin hotels plant more flowers in their gardens, that way we can help the bees in surviving in todays state of climate change.",
    tags: ["Environmental"],
    createdAt: "2021-09-01T00:00:00Z",
    image: "https://loremfaces.net/96/id/2.jpg",
    name: "Brotherman Testern",
    companyLogos: ["/companies/fibra.png"],
  },
  {
    id: "2",
    title: "Build a new park",
    content:
      "Our city needs more green spaces. Let's build a new park for everyone to enjoy. I believe Virgin hotels should be the ones to take the initiative and build this park. It would be a great way to give back to the community, and it would also be a great way to show that Virgin hotels care about the environment.",
    tags: ["Environmental", "Social"],
    createdAt: "2022-09-01T00:00:00Z",
    image: "https://loremfaces.net/96/id/3.jpg",
    name: "Ola Nordmann",
    companyLogos: ["/companies/fibra.png"],
  },
  {
    id: "3",
    title: "Support local businesses",
    content:
      "Local businesses are the heart of our community. Let's support them. In order to do so I would be great if Virgin Atlantic could offer a discount for business travel to local businesses, that way they can save money and grow their business. They could also offer more remote destinations and promote travel to places that depend on their local businesses.",
    tags: ["Economic", "Social"],
    createdAt: "2025-03-18T00:00:00Z",
    image: "https://loremfaces.net/96/id/4.jpg",
    name: "Kari Nordmann",
    companyLogos: ["/companies/mobile.png", "/companies/fibra.png"],
  },
  {
    id: "4",
    title: "Improve public transportation",
    content:
      "Our city's public transportation system needs an upgrade. Let's make it happen.",
    tags: ["Economic", "Social"],
    createdAt: "2025-02-20T00:00:00Z",
    image: "https://loremfaces.net/96/id/5.jpg",
    name: "Jon Johansson",
    companyLogos: ["/companies/mobile.png"],
  },
  {
    id: "5",
    title: "Plant more trees",
    content:
      "Trees are essential for our environment. Let's plant more of them.",
    tags: ["Environmental"],
    createdAt: "2024-09-01T00:00:00Z",
    image: "https://loremfaces.net/96/id/6.jpg",
    name: "Kari Johansson",
    companyLogos: ["/companies/fibra.png"],
  },
];

export default function Feed() {
  return (
    <PageContainer className="flex flex-col items-center gap-4 py-6">
      {items.map((item) => (
        <InitiativeFeedItem key={item.id} {...item} />
      ))}
    </PageContainer>
  );
}
