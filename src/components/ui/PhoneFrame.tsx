export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-70 p-3 rounded-[2.5rem] shadow-2xl border border-border bg-foreground">
      <div className="w-full aspect-9/19 rounded-4xl overflow-hidden bg-background">
        {children}
      </div>
    </div>
  );
}
