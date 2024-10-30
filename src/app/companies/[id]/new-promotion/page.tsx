import FormNewPromo from '@/app/components/Form-new-promo';
import { getOneCompany } from '@/app/utils/API';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default async function NewPromotion({
  params,
}: PageProps): Promise<React.ReactNode> {
  const company = await getOneCompany(params.id);

  return (
    <div className="py-10 px-80">
      <FormNewPromo id={params.id} nameCompany={company.title} />
    </div>
  );
}
