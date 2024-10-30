import FormNewPromo from '@/app/components/Form-new-promo';
import Modal from '@/app/components/Modal';
import React from 'react';
import { getOneCompany } from '@/app/utils/API';

export interface PageProps {
  params: { id: string };
}

export default async function Page({
  params,
}: PageProps): Promise<React.ReactNode> {
  const company = await getOneCompany(params.id);
  return (
    <Modal>
      <FormNewPromo id={params.id} nameCompany={company.title} />
    </Modal>
  );
}
