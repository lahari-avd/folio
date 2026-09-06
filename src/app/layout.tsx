import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const ppMori = localFont({
  src: [
    { path: "./fonts/PPMori-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPMori-Semibold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-mori-loaded",
  display: "swap",
});

const ppEditorial = localFont({
  src: "./fonts/PPEditorialNew-Regular.otf",
  variable: "--font-editorial-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lahari Avadhanam — Portfolio",
  description: "Selected work by Lahari Avadhanam, Product Designer / Visual Storyteller.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ppMori.variable} ${ppEditorial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
