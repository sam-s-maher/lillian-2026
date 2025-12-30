import './globals.css';

import React from "react";
import Header from "./header";
import Hero from "./hero";
import SidebarNavigation from "./sidebar-navigation";
import BottomNavigation from "./bottom-navigation";
import Footer from "./footer";
import { SectionObserver } from './section-observer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full px-3 lg:px-5">
        <Header />
        <SectionObserver>
          <SidebarNavigation />
          <BottomNavigation />
        </SectionObserver>
        <Hero />
        <main className="w-full flex-1 flex flex-col items-center py-12 gap-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
