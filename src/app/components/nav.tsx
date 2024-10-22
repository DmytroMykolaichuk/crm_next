'use client';
import Link from 'next/link';
import DashboardIcon from '../../../public/icon/dashboard.svg';
import CompaniesIcon from '../../../public/icon/companies.svg';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
// import logo from '/public/images/logo.png';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactElement;
};

const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon className="mr-3.5" />,
  },
  {
    name: 'Companies',
    href: '/companies',
    icon: <CompaniesIcon className="mr-3.5" />,
  },
  {
    name: 'Test',
    href: '/test_route',
    icon: <CompaniesIcon className="mr-3.5" />,
  },
];
export default function Nav(): React.ReactElement {
  const path = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-7">
        {navItems.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                'font-medium text-base text-zinc-50 w-full pl-4 pr-[4px] h-9 flex items-center',
                path === item.href &&
                  'after:w-[4px] after:bg-white after:h-full after:ml-auto after:rounded-sm',
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
