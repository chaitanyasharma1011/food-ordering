import { Inter, Montserrat, Gelasio } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
