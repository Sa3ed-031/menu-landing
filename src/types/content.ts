export type SectionKey =
  | "hero"
  | "problem"
  | "steps"
  | "features"
  | "faq"
  | "cta";

export type ImageData = {
  src: string;
  alt: string;
};

// رابط أو زر
export type Cta = {
  label: string;
  href: string;
};

export type SiteMeta = {
  name: string;
  title: string;
  description: string;
  lang: "ar" | "en";
  dir: "rtl" | "ltr";
};

// عنصر فيه أيقونة وعنوان ونص (للمشاكل والميزات)
export type IconItem = {
  icon: string;
  title: string;
  text: string;
};

export type HeaderContent = {
  logo: string;
  links: Cta[];
  cta: Cta;
};

export type HeroSection = {
  enabled: boolean;
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  image?: ImageData;
};

export type ProblemSection = {
  enabled: boolean;
  title: string;
  items: IconItem[];
};

export type StepsSection = {
  enabled: boolean;
  title: string;
  steps: { title: string; text: string }[];
};

export type FeaturesSection = {
  enabled: boolean;
  title: string;
  subtitle?: string;
  items: IconItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSection = {
  enabled: boolean;
  title: string;
  items: FaqItem[];
};

export type CtaSection = {
  enabled: boolean;
  title: string;
  text: string;
  cta: Cta;
};

export type FooterContent = {
  text: string;
  credit: string;
};

// المحتوى الكامل للصفحة
export type SiteContent = {
  meta: SiteMeta;
  header: HeaderContent;
  order: SectionKey[];
  hero: HeroSection;
  problem: ProblemSection;
  steps: StepsSection;
  features: FeaturesSection;
  faq: FaqSection;
  cta: CtaSection;
  footer: FooterContent;
};
