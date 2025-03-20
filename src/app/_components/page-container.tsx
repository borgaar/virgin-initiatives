import { cn } from "@/lib/utils";

export default function PageContainer({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto max-w-6xl", className)}>{children}</div>;
}
