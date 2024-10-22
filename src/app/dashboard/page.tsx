import Link from 'next/link';

export default function Dashboard(): React.ReactElement {
  return (
    <>
      <p>Dashboard</p>
      <Link href="dashboard/standart" className="text-blue-700">
        Standart
      </Link>
    </>
  );
}
