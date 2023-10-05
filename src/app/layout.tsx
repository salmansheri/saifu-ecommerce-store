import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/next-theme-provider";
import { Toaster } from "@/components/ui/toaster";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online shopping for men, women,and accessories",
  description: "Bewakoof the shopping app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
