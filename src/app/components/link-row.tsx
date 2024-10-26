'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface LinkRowProps {
  children: React.ReactNode;
  id: string;
}

export default function LinkRow({
  children,
  id,
}: LinkRowProps): React.ReactElement {
  const router = useRouter();
  const handleRowClick = (id: string) => {
    router.push(`/companies/${id}`);
  };
  return (
    <tr
      className="bg-zinc-50 font-medium cursor-pointer"
      onClick={() => handleRowClick(id)}
    >
      {children}
    </tr>
  );
}
