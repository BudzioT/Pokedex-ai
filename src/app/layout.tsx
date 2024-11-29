import type { Metadata } from "next";
import "./globals.css"
import React from "react";
import localFont from "next/font/local";

const mainFont = localFont({src: "../../public/fonts/GeistVF.woff"});

export const metadata: Metadata = {
  title: "Pokedex with AI",
  description: "Pokedex to show info about pokemons and provide help using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
