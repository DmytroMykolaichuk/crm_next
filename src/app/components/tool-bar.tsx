'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ToolBarProps {
  onSearch: (searchTerm: string) => void;
  type: 'promotion' | 'company';
}

export default function ToolBar({
  onSearch,
  type,
}: ToolBarProps): React.ReactNode {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <div className="flex justify-between px-10 py-8 ">
      <div className="relative">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search..."
          className="py-3 pl-3 pr-8 rounded border border-gray-300 text-sm min-w-[455px]"
          onChange={handleSearchChange}
        />
        <Image
          src="/icon/glass.svg"
          alt="glass"
          width={20}
          height={20}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 "
        />
      </div>
      <Link href="#" className="py-2.5 px-5 bg-gray-900 rounded text-white">
        Add {type}
      </Link>
    </div>
  );
}
