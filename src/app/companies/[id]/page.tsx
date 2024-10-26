import { getOneCompany } from '@/app/utils/API';
import Image from 'next/image';
import Header from '../../components/header';
import React from 'react';
import HeaderCompaniesPage from '@/app/components/header-companies-page';
import StatusLabel from '@/app/components/status-label';

interface CompanyProps {
  params: {
    id: string;
  };
}

export default async function Company({
  params,
}: CompanyProps): Promise<React.ReactNode> {
  const data = await getOneCompany(params.id);

  return (
    <div className="w-full">
      <Header page={data.title} />
      <main>
        <HeaderCompaniesPage />
        <div className="flex flex-col pl-10 pr-7 pb-10">
          <div className="flex flex-col justify-center items-center gap-5 py-7 bg-gray-900 rounded w-[268px]">
            <Image
              src="/images/logoDefaultCompany.svg"
              width={80}
              height={80}
              alt="logo"
            />
            <span className="font-semibold text-base text-zinc-50">
              {data.title}
            </span>
            <StatusLabel status={data.status} />
          </div>
          <div className="text-base mt-5 bg-gray-200 px-5 pt-5 pb-[100px] rounded w-[268px]">
            <h2 className="mb-5 font-semibold text-xl">About company</h2>
            <div className="pb-8 flex flex-col border-b border-gray-400 gap-3">
              <span>Category: {data.categoryTitle || '-'}</span>
              <span>Country: {data.countryTitle || '-'}</span>
              <span>Joined date: {data.joinedDate || '-'}</span>
            </div>
            <p className="pt-8">{data.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
