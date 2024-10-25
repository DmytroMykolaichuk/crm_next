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
      <main className="py-10 pl-10 pr-7 ">
        {stats}
        <div className="flex gap-5">
          {sales}
          {categories}
        </div>
        <div className="flex gap-5 mt-5">
          {countries}
          {promotions}
        </div>
      </main>
    </>
  );
}
