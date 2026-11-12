import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className="w-full flex justify-center">
      <div className={cn("sm:px-8 w-full max-w-6xl px-5", className)}>
        {children}
      </div>
    </div>
  );
}
