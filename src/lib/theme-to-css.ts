import type { CSSProperties } from "react";
import type { Theme } from "@/types/theme";

// بتحوّل primaryForeground ← primary-foreground
const toKebab = (str: string) =>
  str.replace(/[A-Z]/g, (char) => "-" + char.toLowerCase());

export function themeToCssVars(theme: Theme): CSSProperties {
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(theme.colors)) {
    vars[`--brand-${toKebab(key)}`] = value;
  }
  vars["--brand-radius"] = theme.radius;

  return vars as CSSProperties;
}
