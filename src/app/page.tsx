import { Fragment } from "react";
import { content } from "@/config/content";
import type { SectionKey } from "@/types/content";
import type { SectionVariant } from "@/types/sections";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Steps } from "@/components/sections/Steps";
import { Features } from "@/components/sections/Features";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

const { header, hero, problem, steps, features, faq, cta, footer, order } =
  content;

type RenderProps = { variant: SectionVariant; isFirst: boolean };

const renderers: Record<SectionKey, (props: RenderProps) => React.ReactNode> = {
  hero: (props) => <Hero data={hero} {...props} />,
  problem: (props) => <Problem data={problem} {...props} />,
  steps: (props) => <Steps data={steps} {...props} />,
  features: (props) => <Features data={features} {...props} />,
  faq: (props) => <Faq data={faq} {...props} />,
  cta: (props) => <FinalCta data={cta} {...props} />,
};

export default function Home() {
  const visible = order.filter((key) => content[key].enabled);

  return (
    <>
      <Header data={header} />
      <main>
        {visible.map((key, index) => (
          <Fragment key={key}>
            {renderers[key]({
              variant: index % 2 === 0 ? "default" : "surface",
              isFirst: index === 0,
            })}
          </Fragment>
        ))}
      </main>
      <Footer data={footer} />
    </>
  );
}
