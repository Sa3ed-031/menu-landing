import type { ProblemSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { IconCard } from "@/components/ui/IconCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export function Problem({
  data,
  variant,
  isFirst,
}: SectionComponentProps<ProblemSection>) {
  return (
    <Section variant={variant} isFirst={isFirst}>
      <Reveal>
        <SectionHeading title={data.title} />
      </Reveal>

      <RevealGroup className="w-full grid lg:grid-cols-3 gap-4">
        {data.items.map((item) => (
          <RevealItem key={item.title}>
            <IconCard item={item} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
