import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRight } from "lucide-react";

interface InitiativeReference {
  id: number;
  image: string;
  title: string;
  description: string;
}

const mockData: InitiativeReference[] = [
  {
    id: 1,
    image: "https://loremfaces.net/96/id/2.jpg",
    title: "Clean Ocean Initiative",
    description:
      "The sea as of 2025 is full of plastic waste. We aim to remove 5 million tons of plastic from oceans by 2030, spanning 15 countries across 3 continents, as well as educating communities on sustainable practices.",
  },
  {
    id: 2,
    image: "https://loremfaces.net/96/id/3.jpg",
    title: "The Sea Turtle initiative",
    description:
      "Did you know that sea turtles are one of the oldest creatures on Earth? They have been around for over 100 million years! Sadly, all 7 species of sea turtles are now endangered due to human activities, such as poaching, pollution, and climate change. By supporting this initiative, you can help protect these ancient creatures and ensure their survival for generations to come.",
  },
  {
    id: 3,
    image: "https://loremfaces.net/96/id/4.jpg",
    title: "Let's clean the ocean!",
    description:
      "The ocean is the largest ecosystem on Earth, covering more than 70% of the planet's surface. It is home to a wide variety of marine life, from tiny plankton to massive whales. Unfortunately, the ocean is also the world's largest garbage dump, with millions of tons of plastic waste entering the ocean every year. By supporting this initiative, you can help clean up the ocean and protect marine life for future generations.",
  },
  {
    id: 4,
    image: "https://loremfaces.net/96/id/5.jpg",
    title: "The Carbon Footprint initiative",
    description:
      "Did you know that the average person in the United States generates about 16 tons of carbon dioxide (CO2) emissions per year? This is equivalent to burning 1,700 gallons of gasoline! By supporting this initiative, you can help reduce your carbon footprint and combat climate change.",
  },
  {
    id: 5,
    image: "https://loremfaces.net/96/id/7.jpg",
    title: "Clean Water initiative",
    description:
      "Did you know that more than 2 billion people worldwide lack access to clean drinking water? This is a major public health crisis, as contaminated water can spread diseases such as cholera, typhoid, and dysentery. By supporting this initiative, you can help provide clean water to communities in need and improve public health around the world.",
  },
];

export default function InitiativeReference() {
  return (
    <Card>
      <CardHeader className="gap-3">
        <CardTitle className="pl-4">
          Initiative by{" "}
          <span className="text-primary">
            Brotherman Testern<span className="text-black">, </span>Ola Nordmann
            <span className="text-black"> and </span>
            {mockData.length - 2} others
          </span>
        </CardTitle>
        {mockData.map((item) => (
          <CardContent
            key={item.id}
            className="flex flex-col gap-2 rounded-xl border-2 border-solid border-gray-200 bg-white p-4"
          >
            <div className="flex items-center justify-between pr-4">
              <div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={item.image} />
                  </Avatar>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                </div>
                <div className="mr-6 mt-6">{item.description}</div>
              </div>
              <div>
                <ArrowRight height={30} width={30} />
              </div>
            </div>
          </CardContent>
        ))}
      </CardHeader>
    </Card>
  );
}
