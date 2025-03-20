import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format, formatDistance } from "date-fns";
import {
  PlusIcon,
  Share2Icon,
  ThumbsDownIcon,
  ThumbsUp,
  ThumbsUpIcon,
} from "lucide-react";

type Post = {
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
};

export default function Page() {
  const posts: Post[] = [
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
    },
    {
      id: "3",
      title: "Reusable/sustainable wine corks?",
      description: `
        I've noticed that we're still using single-use plastic corks in our business class cabins. Given our commitment to sustainability, I believe we should consider switching to reusable corks made from sustainable materials.
        
        This small change could significantly reduce our plastic waste and demonstrate our dedication to eco-friendly practices. I'd be happy to provide more information on suppliers and cost comparisons if needed.
      `,
      author: {
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        name: "Sarah Johnson",
        isVirginEmployee: false,
      },
      createdAt: "2025-03-18",
      likes: 89,
      dislikes: 5,
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
    },
    {
      id: "5",
      title: "Addressing delays at London Heathrow",
      description: `
          As an operations manager, I'm aware of the recurring delays on our London Heathrow routes. I believe we need to reassess our scheduling to account for the consistently congested taxiways.
          
          I've compiled data from the last six months showing that adding a 20-minute buffer would significantly improve our on-time performance without substantially affecting our scheduling.
      `,
      author: {
        avatar: "https://randomuser.me/api/portraits/men/24.jpg",
        name: "Robert Williams",
        isVirginEmployee: true,
      },
      createdAt: "2025-03-12",
      likes: 56,
      dislikes: 8,
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
    },
    {
      id: "7",
      title: "Carbon offset program transparency",
      description: `
          While I appreciate our carbon offset program, I believe we could improve transparency regarding where exactly these funds go.
          
          As our sustainability manager, I propose creating a detailed quarterly report accessible to all customers, showing the specific projects funded through our offset program and their measurable impact on CO2 reduction.
      `,
      author: {
        avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        name: "Emma Thompson",
        isVirginEmployee: true,
      },
      createdAt: "2025-03-14",
      likes: 122,
      dislikes: 7,
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
    },
    {
      id: "9",
      title: "App update suggestion",
      description: `
          The mobile app desperately needs an update. It crashes constantly when trying to check in, and the seat selection interface is extremely unintuitive.
          
          I work in software development, and would be happy to provide more detailed feedback on specific UI/UX improvements that would make the app more user-friendly.
      `,
      author: {
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
        name: "Alex Kim",
        isVirginEmployee: false,
      },
      createdAt: "2025-03-17",
      likes: 167,
      dislikes: 4,
    },
  ];

  return (
    <div className="flex justify-center px-80 pb-6 pt-10">
      <div className="container">
        <h1 className="text-5xl">Share your thoughts</h1>
        <p className="mb-4 mt-2 text-lg text-white/40">
          Participate in our community and discuss how we can improve our
          sustainability. Give and receive points for coming up with great
          ideas. We want your unfiltered feedback and suggestions.
        </p>
        <div className="mb-4 flex flex-row gap-2 rounded-md bg-neutral-500/5 p-2 backdrop-blur-sm">
          <Button
            variant={"ghost"}
            className="bg-neutral-700/20 hover:bg-neutral-800 hover:text-white"
          >
            Trending
          </Button>
          <Button
            variant={"ghost"}
            className="text-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            New
          </Button>
          <Button
            variant={"ghost"}
            className="text-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            Top
          </Button>
          <Button
            variant={"ghost"}
            className="ml-auto hover:bg-neutral-800 hover:text-white"
          >
            <PlusIcon /> New Post{" "}
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className={cn(
                "flex flex-col border-none bg-neutral-700/10 text-muted backdrop-blur-sm",
              )}
            >
              <CardHeader className="text-sm font-medium text-neutral-400">
                <div className="flex items-center justify-start">
                  <Avatar className="-ml-2 scale-[0.6]">
                    {post.author.avatar && (
                      <AvatarImage
                        className="rounded-full"
                        src={post.author.avatar}
                      ></AvatarImage>
                    )}
                    <AvatarFallback className="bg-white/10 text-sm text-neutral-200">
                      {post.author.name
                        .toUpperCase()
                        .split(" ")
                        .filter(Boolean)
                        .map((v) => v.charAt(0))
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.author.name}</span>
                  <img
                    src="/logo.png"
                    alt=""
                    className={cn(
                      post.author.isVirginEmployee ? "hidden" : "",
                      "ml-2 size-6",
                    )}
                  />
                  <span className="ml-auto">
                    {formatDistance(new Date(post.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <h3 className="text-xl text-white">{post.title}</h3>
              </CardHeader>
              <CardContent className="h-full">
                <p className="overflow-hidden text-ellipsis text-neutral-500">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                >
                  <ThumbsUpIcon /> {post.likes}
                </Button>
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                >
                  <ThumbsDownIcon /> {post.dislikes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                >
                  <Share2Icon />
                </Button>
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="bg-neutral-500/10 hover:bg-neutral-800 hover:text-white"
                >
                  <PlusIcon /> Give points
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
