'use client';
import { useState } from 'react';
import Header from '../components/Header';
import ToolBar from '../components/Tool-bar';
import TableCompanies from '../components/Table-companies';

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
