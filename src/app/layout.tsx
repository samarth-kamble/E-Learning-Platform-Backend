import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Providers from "@/components/providers/ThemeProvider";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechNest | Online Tech Store",
  description:
    "TechNest is an online tech store that sells the latest tech gadgets and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} dark:bg-black dark:text-white`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
