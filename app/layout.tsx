import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Heart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weekly Quiz Practice",
  description: "A 12-week quiz practice website",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">{children}</div>
            <footer className="py-6">
              <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-1.5 text-slate-600">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                  <span>by</span>
                  <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    Juhi Kataria
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
