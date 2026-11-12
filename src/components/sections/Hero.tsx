import Image from "next/image";
import type { HeroSection } from "@/types/content";
import type { SectionComponentProps } from "@/types/sections";

import { Float } from "@/components/ui/Float";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { MenuPlaceholder } from "@/components/ui/MenuPlaceholder";

export function Hero({
  data,
  variant,
  isFirst,
}: SectionComponentProps<HeroSection>) {
  return (
    <Section
      variant={variant}
      isFirst={isFirst}
      className="lg:min-h-[90vh] flex items-center"
    >
      <div className="lg:grid-cols-2 lg:gap-16 w-full grid items-center gap-12">
        {/* Text */}
        <div className="lg:text-start lg:items-start text-center flex flex-col items-center gap-6">
          {data.badge && (
            <Reveal>
              <span className="px-4 py-1.5 text-sm font-semibold inline-flex rounded-full border border-primary/20 text-primary bg-primary/10">
                {data.badge}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <h1 className="lg:text-5xl text-4xl font-extrabold leading-tight">
              {data.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="lg:text-xl max-w-xl text-lg text-muted">
              {data.subtitle}
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="lg:justify-start flex flex-wrap justify-center gap-4"
          >
            <Button href={data.primaryCta.href} size="lg">
              {data.primaryCta.label}
            </Button>
            {data.secondaryCta && (
              <Button
                href={data.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {data.secondaryCta.label}
              </Button>
            )}
          </Reveal>
        </div>

        {/* Mobile */}
        <Reveal
          delay={0.2}
          direction="none"
          className="relative flex justify-center"
        >
          <div className="absolute size-72 rounded-full blur-3xl bg-primary/25" />
          <Float className="relative">
            <PhoneFrame>
              {data.image ? (
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <MenuPlaceholder />
              )}
            </PhoneFrame>
          </Float>
        </Reveal>
      </div>
    </Section>
  );
}
