import localFont from "next/font/local";

// خط العناوين
export const headingFont = localFont({
  src: "./fonts/Cairo.woff2",
  weight: "200 1000",
  variable: "--brand-font-heading",
  display: "swap",
});

// خط النصوص
export const bodyFont = localFont({
  src: [
    { path: "./fonts/Tajawal-Regular.woff2", weight: "400" },
    { path: "./fonts/Tajawal-Medium.woff2", weight: "500" },
    { path: "./fonts/Tajawal-Bold.woff2", weight: "700" },
  ],
  variable: "--brand-font-body",
  display: "swap",
});
