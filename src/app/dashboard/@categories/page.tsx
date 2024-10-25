import { getCategories } from '@/app/utils/API';
import React from 'react';

export default async function Categories(): Promise<React.ReactNode> {
  const data = await getCategories();

  return (
    <section className="bg-gray-200 rounded	p-5 w-3/5 h-fit">
      <h2 className=" pl-5 pb-5 font-medium text-xl text-gray-900">
        Categories of companies
      </h2>
      <ul className="grid grid-cols-4 gap-3	">
        {data.map(({ title, id }) => (
          <li
            key={id}
            className="bg-gray-900 px-3 pt-3 rounded odd:text-purple-200 even:text-lime-200"
          >
            <span className="flex flex-col gap-2 text-white before:w-4 before:h-0.5 before:bg-white">
              {title}
            </span>
            <span className="block font-semibold text-6xl  text-end">
              {Math.floor(Math.random() * 99) + 1}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
