import { getOneCompany, getPromotionsOneCompany } from '@/app/utils/API';
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

  async function checkPromo(hasPromotions: boolean, id: string) {
    return hasPromotions ? await getPromotionsOneCompany(id) : [];
  }

  const promo = await checkPromo(data.hasPromotions, data.id);

  return (
    <div className="w-full">
      <Header page={data.title} />
      <main>
        <HeaderCompaniesPage />
        <div className="flex pl-10 pr-7 pb-10 gap-x-5">
          <div className="flex flex-col ">
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
          <div className="w-full">
            <ul className="grid grid-cols-3 gap-5">
              {promo?.map(({ title, description, discount, id }) => (
                <li key={id} className="rounded  bg-gray-200 overflow-hidden">
                  <div
                    className="w-full h-[160px] bg-[#D9D9D9] relative bg-cover"
                    style={{ backgroundImage: "url('/images/World.svg')" }}
                  >
                    <div className=" absolute top-o left-0 w-[52px] h-[52px] bg-[#111827]  rounded-br-full text-[#D9F99D] text-xs font-bold text-center pt-3">
                      -{discount}%
                    </div>
                  </div>
                  <div className="py-5 pl-5 pr-2 min-h-[116px]">
                    <h3 className="font-semibold text-base text-gray-900 mb-3">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-900">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
