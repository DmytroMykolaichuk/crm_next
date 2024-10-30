'use client';
import { useState } from 'react';
import Header from '../components/header';
import ToolBar from '../components/tool-bar';
import TableCompanies from '../components/table-companies';

export default function Companies(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Header page="Companies" />
      <main>
        <section>
          <ToolBar
            onSearch={setSearchTerm}
            type={'company'}
            url={'/companies/new-company'}
          />
          <TableCompanies searchTerm={searchTerm} />
        </section>
      </main>
    </>
  );
}
