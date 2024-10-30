'use client';
import React, { FormEvent } from 'react';
import LogoUploader from './logo-uploader';
import { changeCompany, createPromo, getOneCompany } from '../utils/API';
import { useRouter } from 'next/navigation';

export interface PageProps {
  id: string;
  nameCompany: string;
}

export default function FormNewPromo({
  id,
  nameCompany,
}: PageProps): React.ReactNode {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { avatar, title, discount, description } = e.currentTarget
      .elements as typeof e.currentTarget.elements & {
      avatar: { value: string };
      title: { value: string };
      discount: { value: string };
      description: { value: string };
    };

    const promoData = {
      avatar: avatar.value,
      description: description.value,
      companyTitle: nameCompany,
      title: title.value,
      discount: +discount.value || 0,
      companyId: id,
    };

    try {
      await createPromo(promoData);
      const company = await getOneCompany(id);
      await changeCompany(company);
      router.push(`/companies/${id}?reload=true`);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-semibold text-xl mb-[12px]">Add promotion</h1>
      <div className="flex flex-col gap-3 text-base mb-3">
        <label className="flex flex-col gap-1">
          Title
          <input
            name="title"
            type="text"
            className="py-3 px-3 rounded border shadow  min-w-[308px]"
            placeholder="Title"
            required
            autoFocus
          />
        </label>
        <label className="flex flex-col gap-2">
          Description
          <input
            name="description"
            type="text"
            className="py-3 px-3 rounded border shadow min-w-[308px]"
            placeholder="Description"
            required
            autoFocus
          />
        </label>
        <label className="flex flex-col gap-2">
          Discount amount
          <input
            name="discount"
            type="text"
            className="py-3 px-3 rounded border shadow min-w-[308px]"
            placeholder="40"
            required
            autoFocus
          />
        </label>
        <LogoUploader type="Image" />
      </div>
      <button
        type="submit"
        className="py-[10px] font-medium text-base w-full bg-[#111827] text-zinc-50 rounded"
      >
        Add company
      </button>
    </form>
  );
}
