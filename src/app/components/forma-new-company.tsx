'use client';
import React, { FormEvent } from 'react';
import LogoUploader from './logo-uploader';
import { createCompany } from '../utils/API';
import { useRouter } from 'next/navigation';

const countries = ['Canada', 'USA', 'Italy', 'Ukraine', 'Spain'];

export default function FormNewCompany(): React.ReactNode {
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { avatar, name, category, status, date, country, description } = e
      .currentTarget.elements as typeof e.currentTarget.elements & {
      avatar: { value: string };
      name: { value: string };
      category: { value: string };
      status: { value: string };
      date: { value: string };
      country: { value: string };
      description: { value: string };
    };

    const companyData = {
      title: name.value,
      description: description.value,
      status: status.value,
      joinedDate: date.value,
      categoryId: category.value,
      categoryTitle: 'Category ' + category.value,
      countryId: country.value,
      countryTitle: countries[parseInt(country.value) - 1] || '',
      avatar: avatar.value,
      hasPromotions: false,
    };
    const result = await createCompany(companyData);
    router.replace(`/companies/${result.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-semibold text-xl mb-[42px]">Add new company</h1>
      <div className="grid grid-cols-2 grid-rows-4 gap-x-7 gap-y-5 mb-10 text-base">
        <LogoUploader />
        <label className="grid grid-cols-1 gap-y-2">
          Name
          <input
            type="text"
            className="py-3 px-3 rounded border shadow min-w-[248px]"
            placeholder="Title"
            required
            autoFocus
            name="name"
          />
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Category
          <select
            name="category"
            className="rounded py-3 px-3 border shadow min-w-[248px]"
          >
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            <option value="4">Category 4</option>
            <option value="5">Category 5</option>
            <option value="6">Category 6</option>
            <option value="7">Category 7</option>
            <option value="8">Category 8</option>
          </select>
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Status
          <select
            name="status"
            className="rounded py-3 px-3 border shadow min-w-[248px]"
            required
          >
            <option value="active">Active</option>
            <option value="notActive">Not Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Joined data
          <input
            name="date"
            type="date"
            className="rounded  border shadow py-3 px-3 min-w-[248px]"
            placeholder="14.02.2021"
          />
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Country
          {/* <input
            name="country"
            type="text"
            className="rounded border shadow py-3 px-3"
            placeholder="Description"
          /> */}
          <select
            name="country"
            className="rounded py-3 px-3 border shadow min-w-[248px]"
          >
            <option value="1">Canada</option>
            <option value="2">USA</option>
            <option value="3">Italy</option>
            <option value="4">Ukraine</option>
            <option value="5">Spain</option>
          </select>
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Description
          <input
            name="description"
            type="text"
            className="rounded border shadow py-3 px-3 min-w-[248px]"
            placeholder="Description"
          />
        </label>
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
