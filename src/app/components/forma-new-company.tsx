import React from 'react';
import LogoUploader from './logo-uploader';
export default function FormNewCompany(): React.ReactNode {
  return (
    <form>
      <h1 className="font-semibold text-xl mb-[42px]">Add new company</h1>
      <div className="grid grid-cols-2 grid-rows-4 gap-x-7 gap-y-5 mb-10 text-base">
        <LogoUploader />
        <label className="grid grid-cols-1 gap-y-2">
          Name
          <input
            type="text"
            className="py-3 px-3 rounded border shadow"
            placeholder="Title"
            required
            autoFocus
          />
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Category
          {/* <input type="text" className="py-3 px-3" placeholder="Title" /> */}
          <select name="category" className="rounded py-3 px-3 border shadow">
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
          {/* <input
            type="text"
            className="py-3 px-3"
            placeholder="Title"
            required
          /> */}
          <select
            name="category"
            className="rounded py-3 px-3 border shadow w-[308px]"
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
            type="date"
            className="rounded  border shadow py-3 px-3"
            placeholder="14.02.2021"
          />
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Country
          <input
            type="text"
            className="rounded border shadow py-3 px-3"
            placeholder="Description"
          />
        </label>
        <label className="grid grid-cols-1 gap-y-2">
          Description
          <input
            type="text"
            className="rounded border shadow py-3 px-3"
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
