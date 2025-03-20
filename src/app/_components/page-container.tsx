import { cn } from "@/lib/utils";

export default function PageContainer({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 xl:px-0", className)}>
      {children}
    </div>
  );
}
