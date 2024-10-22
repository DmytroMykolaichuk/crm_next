import Link from 'next/link';

export default function Companies(): React.ReactElement {
  return (
    <main>
      <div>
        <Link href="/test_route">Companies ☞ﾟ☞ TEST (Intercepting)</Link>
      </div>
      <div>
        <Link href="companies/mono">Mono</Link>
      </div>
      <div>
        <Link href="dashboard/standart">Intercepting ashboard/standart</Link>
      </div>
    </main>
  );
}
