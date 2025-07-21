import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import BackgroundVideo from "@/components/Background";

const figtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "DevAnalyitics",
  description: "Created by Jacob Greene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtreeSans.variable} ${jetbrainsMono.variable} min-h-screen overflow-x-hidden antialiased`}
      >
        <BackgroundVideo />
        <main className="mx-auto mr-9 px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
