import React from 'react';
import LogoUploader from './logo-uploader';
export default function FormNewPromo(): React.ReactNode {
  return (
    <form>
      <h1 className="font-semibold text-xl mb-[12px]">Add promotion</h1>
      <div className="flex flex-col gap-3 text-base mb-3">
        <label className="flex flex-col gap-1">
          Title
          <input
            type="text"
            className="py-3 px-3 rounded border shadow w-full min-w-[308px]"
            placeholder="Title"
            required
            autoFocus
          />
        </label>
        <label className="flex flex-col gap-2">
          Description
          <input
            type="text"
            className="py-3 px-3 rounded border shadow"
            placeholder="Description"
            required
            autoFocus
          />
        </label>
        <label className="flex flex-col gap-2">
          Discount amount
          <input
            type="text"
            className="py-3 px-3 rounded border shadow"
            placeholder="-40%"
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
