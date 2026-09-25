import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Furbble Café — Your Daily Dose of Chill",
  description:
    "Discover Furbble Café — food, shakes, coffee, desserts and good vibes in Nagercoil, Tamil Nadu.",
  keywords: [
    "Furbble",
    "café",
    "Nagercoil",
    "burgers",
    "shakes",
    "coffee",
    "desserts",
    "hangout",
    "Tamil Nadu",
  ],
  openGraph: {
    title: "Furbble Café — Your Daily Dose of Chill",
    description:
      "Discover Furbble Café — food, shakes, coffee, desserts and good vibes in Nagercoil.",
    type: "website",
    locale: "en_IN",
    siteName: "Furbble Café",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furbble Café — Your Daily Dose of Chill",
    description:
      "Discover Furbble Café — food, shakes, coffee, desserts and good vibes in Nagercoil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
