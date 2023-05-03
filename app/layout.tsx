import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Chess at the Edge",
    template: `%s - Chess at the Edge`,
  },
  description: "A chess website for the modern age.",
  keywords: [
    "chess",
    "chess at the edge",
    "edge",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Vercel",
  ],
  authors: [
    {
      name: "Lucas Doell",
      url: "https://lucasdoell.me",
    },
  ],
  creator: "Lucas Doell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          {children}
          <Analytics />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
