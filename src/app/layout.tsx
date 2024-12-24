import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import Navbar from "@/components/Navbar";
import Providers from "@/components/providers/ThemeProvider";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

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
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className} dark:bg-black dark:text-white`}>
          <ConvexClientProvider>
            <Providers>
              <Navbar />
              {children}
            </Providers>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
