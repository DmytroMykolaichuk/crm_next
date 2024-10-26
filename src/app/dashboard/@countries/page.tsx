import React from 'react';
import { getCountries } from '@/app/utils/API';
import Image from 'next/image';

export default async function Countries(): Promise<React.ReactNode> {
  const data = await getCountries();
  return (
    <section className="bg-gray-200 rounded	px-5 py-5 w-[50%] h-fit">
      <h2 className="pb-5 font-medium text-xl text-gray-900">
        Countries of companies
      </h2>
      <div className="flex items-end gap-2">
        <ul className="flex flex-col gap-y-1.5">
          {data.map(({ title, id }) => (
            <li key={id}>
              <span className="flex items-center gap-x-1.5 font-medium text-sm text-gray-900 before:w-2 before:h-2 before:bg-purple-300 before:rounded-full">
                {title} - {Math.floor(Math.random() * 9) + 1}
              </span>
            </li>
          ))}
        </ul>
        <Image
          src="/images/World.svg"
          alt="alt"
          width={395}
          height={260}
          className="flex-1"
        />
      </div>
    </section>
  );
}
