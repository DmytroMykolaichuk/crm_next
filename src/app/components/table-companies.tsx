import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getCompanies } from '../utils/API';
import StatusLabel from './Status-label';
import HasPromotions from './Has-promotions';
import LinkRow from './Link-row';
import { DataCompany } from '../utils/API';

interface TableCompaniesProps {
  searchTerm: string;
}

export default function TableCompanies({
  searchTerm,
}: TableCompaniesProps): React.ReactElement {
  const [data, setData] = useState<DataCompany[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const result = await getCompanies();
      setData(result);
    };
    fetchCompanies();
  }, []);

  const filteredData = data.filter(company =>
    company.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const colorCategory: { [key: string]: string } = {
    '1': '#FB923C',
    '2': '#60A5FA',
    '3': '#FB7185',
    '4': '#34D399',
    '5': '#C084FC',
    '6': '#1D4ED8',
    '7': '#723aaf',
    '8': '#7ba32f',
  };
  return (
    <div className="w-full bg-gray-100 px-10 pb-14">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr className=" text-sm">
            <th className="font-light pb-[18px] pt-[30px] text-start">
              Category
            </th>
            <th className="font-light pb-[18px] pt-[30px] text-start">
              Company
            </th>
            <th className="font-light pb-[18px] pt-[30px]">Status</th>
            <th className="font-light pb-[18px] pt-[30px]">Promotion</th>
            <th className="font-light pb-[18px] pt-[30px]">Country</th>
            <th className="font-light pb-[18px] pt-[30px]">Joined data</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(
            ({
              id,
              title,
              status,
              joinedDate,
              hasPromotions,
              categoryId,
              categoryTitle,
              countryTitle,
            }) => (
              <LinkRow id={id as string} key={id as string}>
                <td
                  className="text-start text-xs py-3 rounded-l-lg border-l-8 pl-3"
                  style={{
                    borderColor:
                      colorCategory[categoryId as keyof typeof colorCategory] ||
                      'white',
                    color:
                      colorCategory[categoryId as keyof typeof colorCategory] ||
                      '#111827',
                  }}
                >
                  {categoryTitle}
                </td>
                <td className=" flex gap-x-2 text-gray-900 text-sm  py-3">
                  <Image
                    src="/images/logoDefaultCompany.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  {title}
                </td>
                <td className="text-center text-gray-900 text-sm py-3">
                  <StatusLabel status={status} />
                </td>
                <td className="text-center text-gray-900 text-sm py-3">
                  <HasPromotions hasPromotions={hasPromotions} />
                </td>
                <td className="text-center text-gray-900 text-sm py-3">
                  {countryTitle}
                </td>
                <td className="text-center text-gray-900 text-sm py-3 rounded-r-lg">
                  {joinedDate}
                </td>
              </LinkRow>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
