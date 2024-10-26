import { getCompanies } from '../utils/API';
import Header from '../components/header';
import HeaderCompaniesPage from '../components/header-companies-page';
import TableCompanies from '../components/table-companies';

export default async function Companies(): Promise<React.ReactElement> {
  const data = await getCompanies();

  return (
    <>
      <Header page="Companies" />
      <main>
        <section>
          <HeaderCompaniesPage />
          <TableCompanies data={data} />
        </section>
      </main>
    </>
  );
}
