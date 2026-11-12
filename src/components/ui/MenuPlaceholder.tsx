const items = [1, 2, 3, 4];

export function MenuPlaceholder() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4">
      <div className="h-24 rounded-2xl bg-primary/15" />

      <div className="flex gap-2">
        <div className="h-7 w-16 rounded-full bg-primary" />
        <div className="h-7 w-14 rounded-full bg-border" />
        <div className="h-7 w-12 rounded-full bg-border" />
      </div>

      {items.map((item) => (
        <div
          key={item}
          className="p-2 flex items-center gap-3 rounded-xl border border-border bg-surface"
        >
          <div className="size-12 shrink-0 rounded-lg bg-primary/20" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="h-2.5 w-3/4 rounded-full bg-foreground/20" />
            <div className="h-2 w-1/2 rounded-full bg-muted/30" />
          </div>
          <div className="h-3 w-10 rounded-full bg-primary/60" />
        </div>
      ))}
    </div>
  );
}
