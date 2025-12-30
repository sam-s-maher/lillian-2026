import './globals.css';

import React from "react";
import Header from "./header";
import Hero from "./hero";
import Navigation from "./navigation";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center mx-4 min-h-screen">
        <Header />
        <Navigation />
        <Hero />
        <main className="w-full flex-1 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
