import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeComp from "@/components/themes/ThemeComp";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevJourney",
  description: "Full Stack Developer Journey, Frontend, Backend, Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeComp>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeComp>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
