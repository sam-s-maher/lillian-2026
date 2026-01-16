import './globals.css';

import React from "react";
import Header from "./components/header";
import SidebarNavigation from "./components/sidebar-navigation";
import BottomNavigation from "./components/bottom-navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full p-[7mm] lg:p-[4mm]">
        <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
          <SidebarNavigation />
          <BottomNavigation />
          <Header />
          <main className="w-full lg:w-[65%] max-w-[1440px] flex flex-col items-center justify-center py-12 gap-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
