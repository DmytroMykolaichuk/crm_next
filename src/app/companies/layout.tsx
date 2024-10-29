import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function LayoutCompanies({ children, modal }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
