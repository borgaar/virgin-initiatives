import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

interface ProjectParticipationProps {
  companies: {
    name: string;
    logo: string;
    description: string;
  }[];
}

export default function ProjectParticipation({
  companies,
}: ProjectParticipationProps) {
  return (
    <Card className="bg-neutral-500/5 px-6 py-3 backdrop-blur-sm">
      <CardTitle className="inline-flex gap-1 text-white">
        Company Participation
      </CardTitle>
      <CardContent className="mt-10 flex flex-row flex-wrap justify-start gap-4">
        {companies.map((c) => (
          <Card
            className="flex max-w-48 flex-col items-center justify-center gap-1 rounded-none bg-transparent px-4 py-6 text-white"
            key={c.name}
          >
            <img src={c.logo} alt={`${c.name}'s logo`} className="h-12" />
            <h3 className="text-md mt-4 text-center font-medium">{c.name}</h3>
            <div className="h-12 text-center text-sm text-neutral-500">
              {c.description}
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
