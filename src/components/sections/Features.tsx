import type { FeaturesSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { IconCard } from "@/components/ui/IconCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";

export function Features({
  data,
  variant,
  isFirst,
}: SectionComponentProps<FeaturesSection>) {
  return (
    <Section id="features" variant={variant} isFirst={isFirst}>
      <Reveal>
        <SectionHeading title={data.title} subtitle={data.subtitle} />
      </Reveal>

      <RevealGroup className="lg:grid-cols-3 sm:grid-cols-2 w-full grid gap-4">
        {data.items.map((item) => (
          <RevealItem key={item.title}>
            <IconCard item={item} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
