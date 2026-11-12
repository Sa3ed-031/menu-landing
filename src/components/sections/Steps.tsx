import type { StepsSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export function Steps({
  data,
  variant,
  isFirst,
}: SectionComponentProps<StepsSection>) {
  return (
    <Section id="how" variant={variant} isFirst={isFirst}>
      <Reveal>
        <SectionHeading title={data.title} />
      </Reveal>

      <RevealGroup className="lg:grid-cols-3 w-full grid gap-10">
        {data.steps.map((step, index) => (
          <RevealItem
            key={step.title}
            className="text-center flex flex-col items-center gap-4"
          >
            <span className="text-xl size-14 font-extrabold flex items-center justify-center rounded-full shadow-lg text-primary-foreground bg-primary shadow-primary/30">
              {index + 1}
            </span>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="max-w-xs text-muted">{step.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
