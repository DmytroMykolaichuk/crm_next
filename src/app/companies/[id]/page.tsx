'use client';
import { useSearchParams } from 'next/navigation';
import {
  deletePromo,
  getOneCompany,
  getPromotionsOneCompany,
} from '@/app/utils/API';
import Image from 'next/image';
import Header from '../../components/header';
import React, { useState, useEffect } from 'react';
import ToolBar from '@/app/components/tool-bar';
import StatusLabel from '@/app/components/status-label';
import { DataCompany, DataPromotions } from '@/app/utils/API';

interface CompanyProps {
  params: {
    id: string;
  };
}

export default function CompanyPage({ params }: CompanyProps): React.ReactNode {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<DataCompany>({
    title: 'Loading',
    description: 'Loading',
    status: 'Loading',
    joinedDate: 'Loading',
    hasPromotions: false,
    categoryId: 'Loading',
    categoryTitle: 'Loading',
    countryId: '',
    countryTitle: 'Loading',
    id: '',
  });
  const [promotions, setPromotions] = useState<DataPromotions[]>([]);
  const searchParams = useSearchParams();
  const reload = searchParams.get('reload');
  useEffect(() => {
    const loadData = async () => {
      const companyData = await getOneCompany(params.id);
      const promoData = await getPromotionsOneCompany(companyData.id as string);
      setData(companyData);
      setPromotions(promoData);
    };

    loadData();
  }, [params.id, reload]);

  async function handleDelete(id: string) {
    await deletePromo(id);
    setPromotions(prev => prev.filter(el => el.id != id));
  }

  const filteredPromo = promotions.filter(promo =>
    promo.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="w-full">
      <Header page={data.title} />
      <main>
        <ToolBar
          onSearch={setSearchTerm}
          type={'promotion'}
          url={`/companies/${params.id}/new-promotion`}
        />
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
              {filteredPromo?.map(({ title, description, discount, id }) => (
                <li key={id} className="rounded  bg-gray-200 overflow-hidden">
                  <div
                    className="w-full h-[160px] bg-[#D9D9D9] relative bg-cover"
                    style={{ backgroundImage: "url('/images/World.svg')" }}
                  >
                    <div className=" absolute top-o left-0 w-[52px] h-[52px] bg-[#111827]  rounded-br-full text-[#D9F99D] text-xs font-bold text-center pt-3">
                      - {discount}%
                    </div>
                    <button
                      type="button"
                      className=" absolute top-o right-0 w-[52px] h-[52px] bg-[#111827]  rounded-bl-full text-[#D9F99D] text-xs font-bold text-center pl-3 pb-4"
                      onClick={() => handleDelete(id as string)}
                    >
                      X
                    </button>
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
