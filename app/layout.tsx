import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const InterF1 = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const InterF = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush-dev-Portfolio",
  description: "Welcome to my portfolio, Human",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterF1.variable} ${InterF.variable} antialiased`}
      > <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
