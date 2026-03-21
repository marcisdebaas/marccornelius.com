import { DM_Serif_Display, DM_Sans, Inter } from "next/font/google";

export const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-font",
  display: "swap",
});
