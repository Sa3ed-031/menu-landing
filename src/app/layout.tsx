import type { Metadata } from "next";

import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { themeToCssVars } from "@/lib/theme-to-css";
import { headingFont, bodyFont } from "@/config/fonts";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={content.meta.lang}
      dir={content.meta.dir}
      style={themeToCssVars(theme)}
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
