import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TechNest | Online Tech Store",
  description: "TechNest is an online Laptop and mobile store.",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={`${nunito.className} antialiased`}>
          <ConvexClientProvider>
            <Navbar />
            {children}
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
