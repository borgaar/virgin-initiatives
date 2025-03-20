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
    updatedAt: "2021-09-01T00:00:00Z",
    likes: 10,
    interested: 20,
  },
  {
    id: "2",
    title: "Build a new park",
    content:
      "Our city needs more green spaces. Let's build a new park for everyone to enjoy.",
    tags: [Tag.Environmental, Tag.Social],
    createdAt: "2021-09-01T00:00:00Z",
    updatedAt: "2021-09-01T00:00:00Z",
    likes: 5,
    interested: 15,
  },
  {
    id: "3",
    title: "Support local businesses",
    content:
      "Local businesses are the heart of our community. Let's support them.",
    tags: [Tag.Economic, Tag.Social],
    createdAt: "2021-09-01T00:00:00Z",
    updatedAt: "2021-09-01T00:00:00Z",
    likes: 8,
    interested: 12,
  },
  {
    id: "4",
    title: "Improve public transportation",
    content:
      "Our city's public transportation system needs an upgrade. Let's make it happen.",
    tags: [Tag.Economic, Tag.Social],
    createdAt: "2021-09-01T00:00:00Z",
    updatedAt: "2021-09-01T00:00:00Z",
    likes: 7,
    interested: 10,
  },
  {
    id: "5",
    title: "Plant more trees",
    content:
      "Trees are essential for our environment. Let's plant more of them.",
    tags: [Tag.Environmental],
    createdAt: "2021-09-01T00:00:00Z",
    updatedAt: "2021-09-01T00:00:00Z",
    likes: 12,
    interested: 25,
  },
];

export default function Feed() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-6">
      {items.map((item) => (
        <InitiativeFeedItem key={item.id} {...item} />
      ))}
    </div>
  );
}
