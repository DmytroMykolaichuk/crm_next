'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps): React.ReactNode {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#324e864c] overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[35%] -translate-y-1/2 p-7 bg-[#F3F4F6] rounded">
        <button
          type="button"
          className="absolute top-[12px] right-[12px]"
          onClick={() => router.back()}
        >
          <Image
            src="/icon/close-modal.svg"
            alt="close"
            width={24}
            height={24}
          />
        </button>
        {children}
      </div>
    </div>
  );
}
