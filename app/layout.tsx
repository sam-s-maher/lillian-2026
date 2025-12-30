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
      <body className="flex flex-col items-center m-3 lg:m-5">
        <div className="w-full lg:h-screen">
          <div className="flex flex-col lg:h-screen lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <Header />
              <Navigation />
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <Hero />
            </div>
          </div>
        </div>
        <main className="w-full flex-1 flex flex-col items-center mt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
