import React from 'react';
import Image from 'next/image';
import { getSales } from '@/app/utils/API';

export default async function Sales(): Promise<React.ReactNode> {
  const data = await getSales();
  return (
    <section className="bg-gray-200 rounded	pt-5 w-[40%]">
      <h2 className=" pl-5 pb-5 font-medium text-xl text-gray-900">
        Sales details
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-3/5 text-start pl-[20px] py-[6px] text-xs text-white bg-gray-900 rounded-s-sm">
              Company
            </th>
            <th className=" w-1/5 px-[32px] py-[6px] text-xs text-gray-900 bg-purple-200">
              Sold
            </th>
            <th className="w-1/5 px-[30px] py-[6px] text-xs text-gray-900 bg-lime-200 rounded-e-sm">
              Income
            </th>
          </tr>
        </thead>
      </table>
      <div className="max-h-[207px] overflow-auto">
        <table className="w-full">
          <tbody>
            {data.map(({ id, companyTitle, sold, income }) => (
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
                  {sold}
                </td>
                <td className="text-center text-gray-900 text-sm py-2">
                  ${income}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
