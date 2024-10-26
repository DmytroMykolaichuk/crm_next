import React from 'react';
import Image from 'next/image';

export default function HeaderCompaniesPage(): React.ReactNode {
  return (
    <div className="flex justify-between px-10 py-8 ">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-3 pl-3 pr-8 rounded border border-gray-300 text-sm min-w-[455px]"
        />
        <Image
          src="/icon/glass.svg"
          alt="glass"
          width={20}
          height={20}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 "
        />
      </div>
      <button
        type="button"
        className="py-2.5 px-5 bg-gray-900 rounded text-white"
      >
        Add company
      </button>
    </div>
  );
}
