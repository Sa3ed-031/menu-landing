type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-2xl text-center flex flex-col gap-3">
        <h2 className="sm:text-4xl text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
