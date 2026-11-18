import type { Metadata } from "next";

import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { themeToCssVars } from "@/lib/theme-to-css";
import { headingFont, bodyFont } from "@/config/fonts";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const ogImage = `${content.meta.url}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(content.meta.url),
  title: content.meta.title,
  description: content.meta.description,
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: content.meta.url,
    siteName: content.meta.name,
    locale: content.meta.lang === "ar" ? "ar_SY" : "en_US",
    type: "website",
    images: [
      { url: ogImage, width: 1200, height: 630, alt: content.meta.title },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [ogImage],
  },
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
