import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SideBar from './components/Side-bar';
import Nav from './components/Nav';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className} style={{ display: 'flex' }}>
        <SideBar>
          <Nav />
        </SideBar>
        <div className="w-full ml-[16.666%]">{children}</div>
      </body>
    </html>
  );
}
