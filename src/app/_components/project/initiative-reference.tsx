import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Project } from "../../../lib/projects";
import { fullName } from "../../../lib/people";
import PersonAvatar from "../user-avatar";

interface InitiativeReferenceProps {
  initiatives: Project["initiatives"];
}

export default function InitiativeReference({
  initiatives,
}: InitiativeReferenceProps) {
  const others = (() => {
    const others = initiatives.length - 2;

    if (others === 0) {
      return "";
    }

    if (others === 1) {
      return `and 1 other`;
    }

    return `and ${others} others`;
  })();

  return (
    <Card className="bg-neutral-500/5 px-6 py-3 backdrop-blur-sm">
      <CardHeader className="gap-3">
        <CardTitle className="text-white">
          Initiative by{" "}
          <span className="text-primary">
            {fullName(initiatives[0]!.author)}
            <span className="text-white">, </span>
            {fullName(initiatives[1]!.author)}
            <span className="text-white">{others}</span>
          </span>
        </CardTitle>
        {initiatives.map((item) => (
          <CardContent
            key={item.id}
            className="flex flex-col gap-2 rounded-xl border-2 border-solid border-gray-400 p-4 text-white"
          >
            <div className="flex items-center justify-between pr-4">
              <div>
                <div className="flex items-center gap-4">
                  <PersonAvatar person={item.author} />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-400">
                      {fullName(item.author)}
                    </p>
                  </div>
                </div>
                <div className="mr-6 mt-6 text-gray-200">
                  {item.description}
                </div>
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
