import type { FooterContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

export function Footer({ data }: { data: FooterContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border">
      <Container className="lg:flex-row text-sm flex flex-col items-center justify-between gap-2 text-muted">
        <p>{data.text}</p>
        <p>
          © {year} ·{" "}
          <span className="font-semibold text-foreground">{data.credit}</span>
        </p>
      </Container>
    </footer>
  );
}
