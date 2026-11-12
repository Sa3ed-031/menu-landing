import type { FaqSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq({
  data,
  variant,
  isFirst,
}: SectionComponentProps<FaqSection>) {
  return (
    <Section id="faq" variant={variant} isFirst={isFirst}>
      <Reveal>
        <SectionHeading title={data.title} />
      </Reveal>
      <Reveal className="w-full flex justify-center">
        <FaqAccordion items={data.items} />
        {/* We can't send function props to client components, just simple data(strings, numbers, arrays) */}
      </Reveal>
    </Section>
  );
}
