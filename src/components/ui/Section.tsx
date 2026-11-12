import { cn } from "@/lib/cn";
import type { SectionVariant } from "@/types/sections";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  isFirst?: boolean;
};

export function Section({
  id,
  children,
  className,
  variant = "default",
  isFirst = false,
}: SectionProps) {
  return (
    <section
      id={id}
      data-variant={variant}
      className={cn(
        "lg:py-24 group/section w-full py-14",
        isFirst && "lg:pt-34 pt-28",
        variant === "surface" && "bg-surface",
        className,
      )}
    >
      <Container className="lg:gap-12 flex flex-col gap-8">
        {children}
      </Container>
    </section>
  );
}
