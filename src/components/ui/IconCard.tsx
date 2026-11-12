import type { IconItem } from "@/types/content";

export function IconCard({ item }: { item: IconItem }) {
  return (
    <div className="h-full p-6 flex flex-col gap-3 rounded-brand transition-all duration-300 border border-border hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg bg-surface group-data-[variant=surface]/section:bg-background">
      <span className="text-2xl size-12 flex items-center justify-center rounded-xl bg-primary/10">
        {item.icon}
      </span>
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="leading-relaxed text-muted">{item.text}</p>
    </div>
  );
}
