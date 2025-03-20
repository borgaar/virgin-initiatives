import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { mock } from "node:test";

interface InitiativeReferenceProps {
  initiatives: {
    id: number;
    image: string;
    title: string;
    description: string;
    author: string;
  }[];
}

export default function InitiativeReference({
  initiatives,
}: InitiativeReferenceProps) {
  return (
    <div className="bg-white bg-opacity-5">
      <Card className="bg-transparent px-6 py-3">
        <CardHeader className="gap-3">
          <CardTitle className="text-white">
            Initiative by{" "}
            <span className="text-primary">
              {initiatives[0]?.author}
              <span className="text-white">, </span>
              {initiatives[1]?.author}
              <span className="text-white">
                {" "}
                and {initiatives.length - 2} others{" "}
              </span>
            </span>
          </CardTitle>
          {initiatives.map((item) => (
            <CardContent
              key={item.id}
              className="flex flex-col gap-2 rounded-xl border-2 border-solid border-gray-200 p-4"
            >
              <div className="flex items-center justify-between pr-4">
                <div>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={item.image} />
                      <AvatarFallback>
                        {item.author.split(" ").map((p) => p[0])}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-sm">{item.author}</p>
                    </div>
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
    </div>
  );
}
