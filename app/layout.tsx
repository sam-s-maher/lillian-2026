import './globals.css';

import React from "react";
import Header from "./header";
import ScrollHeader from "./scroll-header";
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
      <body className="w-full px-4 lg:px-5">
        <ScrollHeader />
        <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
          <SectionObserver>
            <SidebarNavigation />
            <BottomNavigation />
          </SectionObserver>
          <Header />
          <Hero />
          <main className="w-full lg:w-[65%] max-w-[1440px] flex flex-col items-center justify-center py-12 gap-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
