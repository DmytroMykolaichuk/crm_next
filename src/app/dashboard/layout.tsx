import React from 'react';

interface layoutProp {
  children: React.ReactNode;
  parallel: React.ReactNode;
  parallel2: React.ReactNode;
}
export default function DashboardLayout({
  children,
  parallel,
  parallel2,
}: layoutProp) {
  return (
    <main>
      <div>{children}</div>
      <div>{parallel}</div>
      <div>{parallel2}</div>
    </main>
  );
}
