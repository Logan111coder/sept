import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Swept Away — A New Standard of Clean",
  description:
    "A premium cleaning studio. Residential, deep, move-out, commercial, and rental turnovers — finished with the kind of detail you feel the moment you walk in.",
  openGraph: {
    title: "Swept Away — A New Standard of Clean",
    description: "A premium cleaning studio.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
