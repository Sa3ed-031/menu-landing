import { Cairo, Tajawal } from "next/font/google";

// خط العناوين
export const headingFont = Cairo({
  subsets: ["arabic", "latin"], // languages
  weight: ["600", "700", "800"], // weights
  variable: "--brand-font-heading", // css variable name
  display: "swap", // font-display strategy, fallback font will be used, then swapped with the custom font when it loads
});

// خط النصوص
export const bodyFont = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--brand-font-body",
  display: "swap",
});
