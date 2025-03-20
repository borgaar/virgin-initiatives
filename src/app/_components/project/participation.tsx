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
    <div className="bg-white bg-opacity-5">
      <Card className="bg-transparent px-6 py-3">
        <CardHeader>
          <CardTitle className="inline-flex gap-1 text-white">
            Company Participation
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap justify-start gap-4">
          {companies.map((c) => (
            <Card
              className="flex max-w-48 flex-col items-center justify-center gap-1 rounded-none px-4 py-2"
              key={c.name}
            >
              <img src={c.logo} alt={`${c.name}'s logo`} className="w-14" />
              <h3 className="text-center text-lg font-medium">{c.name}</h3>
              <div className="text-center text-sm">{c.description}</div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
