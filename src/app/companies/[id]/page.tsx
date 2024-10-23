import Header from '../../components/header';

interface CompanieProps {
  params: {
    id: string;
  };
}

export default function Companie({ params }: CompanieProps) {
  return (
    <div className="w-full">
      <Header page={params.id} />
      <main>
        <p>{params.id}</p>
      </main>
    </div>
  );
}
