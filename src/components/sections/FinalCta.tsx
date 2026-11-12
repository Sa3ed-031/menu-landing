import type { CtaSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function FinalCta({
  data,
  variant,
  isFirst,
}: SectionComponentProps<CtaSection>) {
  return (
    <Section variant={variant} isFirst={isFirst}>
      <Reveal>
        <div className="lg:p-16 w-full relative text-center p-10 flex flex-col items-center gap-6 rounded-4xl overflow-hidden text-primary-foreground bg-primary">
          <div className="absolute size-80 -top-32 -inset-s-32 rounded-full blur-2xl bg-background/10" />
          <h2 className="lg:text-4xl relative text-3xl font-extrabold">
            {data.title}
          </h2>
          <p className="max-w-xl relative text-lg opacity-90">{data.text}</p>
          <Button
            href={data.cta.href}
            variant="inverse"
            size="lg"
            className="relative"
          >
            {data.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
