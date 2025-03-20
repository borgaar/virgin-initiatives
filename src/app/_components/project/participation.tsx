import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const companies = [
  {
    name: "Virgin Fibra",
    logo: "/virgin-fibra.png",
    description: "Making life simpler",
  },
  {
    name: "Virgin Active Australia",
    logo: "/virgin-active.png",
    description: "Creating irresistible exercise experiences",
  },
];

export default function ProjectParticipation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="inline-flex gap-1">
          Company Participation
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap justify-start gap-2">
        {companies.map((c) => (
          <Card
            className="flex max-w-48 flex-col items-center justify-center gap-1 px-4 py-2"
            key={c.name}
          >
            <img src={c.logo} alt={`${c.name}'s logo`} className="w-14" />
            <h3 className="text-center text-lg font-medium">{c.name}</h3>
            <div className="text-center text-sm">{c.description}</div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
