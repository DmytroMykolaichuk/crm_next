import React from 'react';
import Image from 'next/image';
import { getPromotions } from '@/app/utils/API';

export default async function Promotions(): Promise<React.ReactNode> {
  const data = await getPromotions();
  return (
    <section className="bg-gray-200 rounded	pt-5 w-[50%] ">
      <h2 className="pl-5 pb-5 font-medium text-xl text-gray-900">
        Promotions
      </h2>

      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-[45%] text-start pl-[20px] py-[6px] text-xs text-white bg-gray-900 rounded-s-sm">
              Company
            </th>
            <th className="text-start w-[35%] pl-[20px] py-[6px] text-xs text-gray-900 bg-purple-200">
              Name
            </th>
            <th className="w-[20%] px-[30px] py-[6px] text-xs text-gray-900 bg-lime-200 rounded-e-sm">
              %
            </th>
          </tr>
        </thead>
      </table>

      <div className="max-h-[279px] overflow-auto">
        <table className="w-full">
          <tbody>
            {data.map(({ id, title, discount, companyTitle }) => (
              <tr key={id} className="odd:bg-zinc-50 even:bg-gray-200">
                <td className="pl-5 flex gap-x-2 text-gray-900 text-sm py-2">
                  <Image
                    src="/images/logoDefaultCompany.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  {companyTitle}
                </td>
                <td className="text-center text-gray-900 text-sm py-2">
                  {title}
                </td>
                <td className="text-center text-gray-900 text-sm py-2">
                  -{discount}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
