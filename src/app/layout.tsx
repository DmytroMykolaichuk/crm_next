import React from 'react';
import SideBar from './components/side-bar';
import Nav from './components/nav';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex">
        <SideBar>
          <Nav />
        </SideBar>
        <div className="w-full ml-[16.666%]">{children}</div>
      </body>
    </html>
  );
}
