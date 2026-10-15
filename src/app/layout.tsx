import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Header";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/components/layout/Footer";
import { GlobalStyle } from "@/styles/GlobalStyle";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loop Space Studio",
  description: "Interior design studio crafting timeless, functional spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.variable} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}