'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
export interface LogoUploaderProps {
  type?: string;
}

export default function LogoUploader({
  type,
}: LogoUploaderProps): React.ReactNode {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  return (
    <div className="flex justify-center items-center row-span-2 relative">
      {!type && (
        <p className="absolute top-0 left-0 text-base color-gray-900">Logo</p>
      )}
      <label
        className={clsx(
          'flex flex-col items-center justify-center  bg-white border border-slate-900 border-dashed cursor-pointer',
          type ? 'w-full h-[184px] rounded' : 'w-48 h-full rounded-full',
        )}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded logo"
            className={clsx('object-cover', !type && 'rounded-full')}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <>
            <Image
              className="mb-1"
              width={48}
              height={48}
              src="/icon/upload.svg"
              alt="upload"
            />
            <p className="text-base text-gray-500 text-start">Upload photo</p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          name="avatar"
        />
      </label>
    </div>
  );
}
