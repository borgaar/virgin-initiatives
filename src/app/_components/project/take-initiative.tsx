import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function ProjectTakeInitiative() {
  return (
    <Card className="flex h-full flex-col bg-neutral-500/5 p-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg leading-tight text-white">
          Joining this initiative will earn you points!
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full w-full flex-col justify-end gap-3 pb-[1.8rem]">
        <div className="flex w-full flex-row justify-between gap-3">
          <Button className="w-full">Donate cash</Button>
          <Button className="w-full" variant={"secondary"}>
            Donate points
          </Button>
        </div>
        <Button variant={"secondary"}>Share on social media</Button>
      </CardContent>
    </Card>
  );
}
