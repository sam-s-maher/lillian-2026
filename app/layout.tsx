import './globals.css';

import React from "react";
import Header from "./header";
import Hero from "./hero";
import Navigation from "./navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        <main>{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
