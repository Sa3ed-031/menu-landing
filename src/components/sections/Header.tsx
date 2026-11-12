"use client";

import { useEffect, useState } from "react";
import type { HeaderContent } from "@/types/content";
import { cn } from "@/lib/cn";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header({ data }: { data: HeaderContent }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full h-16 flex items-center transition-all duration-300 border-b",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#" className="font-heading text-xl font-extrabold">
          {data.logo}
        </a>

        <nav className="lg:flex hidden items-center gap-8">
          {data.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium transition-colors hover:text-primary text-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={data.cta.href}>{data.cta.label}</Button>
      </Container>
    </header>
  );
}
