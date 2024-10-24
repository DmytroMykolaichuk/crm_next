import React from 'react';

interface PropPageDashboard {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  promotions: React.ReactNode;
  countries: React.ReactNode;
}

export default function DashboardLayout({
  children,
  stats,
  sales,
  categories,
  promotions,
  countries,
}: PropPageDashboard) {
  return (
    <>
      {children}
      <main className="pt-10 pl-10 pr-7">
        {stats}
        {sales}
        {categories}
        {promotions}
        {countries}
      </main>
    </>
  );
}
