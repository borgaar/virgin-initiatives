import InitiativeFeedItem, {
  type FeedItem,
  Tag,
} from "../_components/initiative-feed-item";

const items: FeedItem[] = [
  {
    id: "1",
    title: "Save the bees",
    content:
      "Bees are dying at an alarming rate. We need to take action to save them.",
    tags: [Tag.Environmental],
    createdAt: "2021-09-01T00:00:00Z",
    likes: 10,
    interested: 20,
    image: "https://loremfaces.net/96/id/2.jpg",
    name: "Brotherman Testern",
    companyLogo: ["/virgin-fibra.png"],
  },
  {
    id: "2",
    title: "Build a new park",
    content:
      "Our city needs more green spaces. Let's build a new park for everyone to enjoy.",
    tags: [Tag.Environmental, Tag.Social],
    createdAt: "2022-09-01T00:00:00Z",
    likes: 5,
    interested: 15,
    image: "https://loremfaces.net/96/id/3.jpg",
    name: "Ola Nordmann",
    companyLogo: ["/virgin-fibra.png"],
  },
  {
    id: "3",
    title: "Support local businesses",
    content:
      "Local businesses are the heart of our community. Let's support them.",
    tags: [Tag.Economic, Tag.Social],
    createdAt: "2025-03-18T00:00:00Z",
    likes: 8,
    interested: 12,
    image: "https://loremfaces.net/96/id/4.jpg",
    name: "Kari Nordmann",
    companyLogo: ["/virgin-active.png", "/virgin-fibra.png"],
  },
  {
    id: "4",
    title: "Improve public transportation",
    content:
      "Our city's public transportation system needs an upgrade. Let's make it happen.",
    tags: [Tag.Economic, Tag.Social],
    createdAt: "2025-02-20T00:00:00Z",
    likes: 7,
    interested: 10,
    image: "https://loremfaces.net/96/id/5.jpg",
    name: "Jon Johansson",
    companyLogo: ["/virgin-active.png"],
  },
  {
    id: "5",
    title: "Plant more trees",
    content:
      "Trees are essential for our environment. Let's plant more of them.",
    tags: [Tag.Environmental],
    createdAt: "2024-09-01T00:00:00Z",
    likes: 12,
    interested: 25,
    image: "https://loremfaces.net/96/id/6.jpg",
    name: "Kari Johansson",
    companyLogo: ["/virgin-fibra.png"],
  },
];

export default function Feed() {
  return (
    <div className="pt-18 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-6">
      {items.map((item, i) => (
        <InitiativeFeedItem key={item.id} {...item} />
      ))}
    </div>
  );
}
