import React from 'react';
import Image from 'next/image';

interface PropsHeader {
  page: string;
}

export default function Header({ page }: PropsHeader): React.ReactElement {
  return (
    <header className="flex flex-1 py-6 pl-10 pr-7 border-b ">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">{page}</h1>
      <div className="flex border-l pl-9 gap-x-3">
        <div className="w-[44px] bg-black h-[44px] rounded-full bg-[url('/images/avatar.jpg')] bg-cover"></div>
        <div className="flex flex-col ">
          <span className="font-semibold text-base">Apoo</span>
          <span className="text-sm font-light">simpsons@gmail.com</span>
        </div>
      </div>
    </header>
  );
}
