import React from 'react';
import Modal from '@/app/components/modal';
import FormNewCompany from '@/app/components/forma-new-company';

export default function NewCompany(): React.ReactNode {
  return (
    <Modal>
      <FormNewCompany />
    </Modal>
  );
}
