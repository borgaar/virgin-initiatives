import { Card } from "@/components/ui/card";
import { NumberTicker } from "../../../components/ui/number-ticker";
import { cn } from "../../../lib/utils";

interface Stat {
  name: string;
  value: number;
  change: string;
  changeType: "positive" | "negative";
  prefix?: string;
  postfix?: string;
}

const stats: Stat[] = [
  {
    name: "Invested",
    value: 405091928,
    change: "+4.75%",
    changeType: "positive",
    postfix: "$",
  },
  {
    name: "Progress",
    value: 75,
    prefix: "",
    postfix: "%",
    change: "+2.02%",
    changeType: "positive",
  },
  {
    name: "Countries",
    value: 18,
    change: "-2",
    changeType: "negative",
  },
];

export default function KeyFigures() {
  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-4">
      <div className="my-5 flex w-96 items-center gap-2 font-[merriweather] text-5xl font-bold">
        <span className="ml-auto text-primary">2024</span>{" "}
        <span className="mr-auto">Wrapped</span>
      </div>
      <dl className="mx-auto grid grid-cols-1 gap-2 bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-[1px] border-white/10 bg-white/5 px-4 py-10 sm:px-6 xl:px-8"
          >
            <dt className="text-sm/6 font-medium text-gray-300">{stat.name}</dt>
            <dd
              className={cn(
                stat.changeType === "negative"
                  ? "text-rose-600"
                  : "text-green-600",
                "text-xs font-medium",
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-200">
              {stat.prefix && stat.prefix}
              <NumberTicker value={stat.value} />
              {stat.postfix && stat.postfix}
            </dd>
          </Card>
        ))}
      </dl>
    </div>
  );
}
