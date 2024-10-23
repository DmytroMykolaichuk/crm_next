import Header from '../components/header';
import Link from 'next/link';

export default function Companies(): React.ReactElement {
  return (
    <div className="w-full">
      <Header page="Companies" />
      <main>
        <div>
          <Link href="companies/mono">Mono</Link>
        </div>
        <div>
          <Link href="companies/nova_poshta">Nova Poshta</Link>
        </div>
      </main>
    </div>
  );
}
