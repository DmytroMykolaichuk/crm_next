interface CompanieProps {
  params: {
    id: string;
  };
}

export default function Companie({ params }: CompanieProps) {
  return <p>{params.id}</p>;
}
