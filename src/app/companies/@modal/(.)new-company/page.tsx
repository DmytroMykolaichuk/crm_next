import React from 'react';
import Modal from '@/app/components/Modal';
import FormNewCompany from '@/app/components/Forma-new-company';

export default function NewCompany(): React.ReactNode {
  return (
    <Modal>
      <FormNewCompany />
    </Modal>
  );
}
