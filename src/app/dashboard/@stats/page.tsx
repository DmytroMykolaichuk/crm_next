import { getStats } from '@/app/utils/API';
import React from 'react';

export default async function Stats(): Promise<React.ReactNode> {
  const data = await getStats();
  const stats = [
    {
      title: 'Total promotions',
      value: data.promotions,
      gradient: '/images/gradient/mesh-gradient-1.svg',
    },
    {
      title: 'Total category',
      value: data.categories,
      gradient: '/images/gradient/mesh-gradient-2.svg',
    },
    {
      title: 'New companies',
      value: data.newCompanies,
      gradient: '/images/gradient/mesh-gradient-3.svg',
    },
    {
      title: 'Total active companies',
      value: data.activeCompanies,
      gradient: '/images/gradient/mesh-gradient-4.svg',
    },
  ];
  return (
    <section>
      <ul className="flex justify-between	pb-5 gap-x-5">
        {stats.map(({ title, value, gradient }) => (
          <li
            key={title}
            className="flex flex-col flex-1 py-7 pl-7 bg-gray-200 bg-cover gap-y-5 rounded"
            style={{ backgroundImage: `url(${gradient})` }}
          >
            <span className="flex items-center gap-x-2 text-xs text-gray-900 font-normal before:w-[16px] before:bg-black before:h-[2px] before:rounded">
              {title}
            </span>
            <span className="font-semibold text-6xl text-gray-900 ml-6">
              {value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
