import React from 'react';

interface PropsHeader {
  page: string;
}

export default function Header({ page }: PropsHeader) {
  return (
    <header className="flex flex-1 py-6 pl-10 pr-7 border-b border-gray-300">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">{page}</h1>
      <div className="flex border-l border-gray-300 pl-9 gap-x-3">
        <div className="w-[44px] bg-black h-[44px] rounded-full bg-[url('/images/avatar.jpg')] bg-cover"></div>
        <div className="flex flex-col ">
          <span className="font-semibold text-base">Apoo</span>
          <span className="text-sm font-light">simpsons@gmail.com</span>
        </div>
      </div>
    </header>
  );
}
