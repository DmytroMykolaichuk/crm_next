import React from 'react';
import clsx from 'clsx';

const statusRefactor: Record<string, string> = {
  active: 'Active',
  notActive: 'Not Active',
  pending: 'Pending',
  suspended: 'Suspended',
};

export type Status = keyof typeof statusRefactor;

export interface StatusLabelProps {
  status: Status;
}

export default function StatusLabel({
  status,
}: StatusLabelProps): React.ReactElement {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-3xl font-medium text-sm py-1 px-3.5 justify-center w-max',
        status === 'active' && 'bg-green-100 text-green-700',
        status === 'notActive' && 'bg-red-100 text-red-700',
        status === 'pending' && 'bg-orange-100 text-orange-700',
        status === 'suspended' && 'bg-blue-100 text-blue-700',
      )}
    >
      <div className="w-1 h-1 bg-current rounded-full mr-2"></div>
      {statusRefactor[status]}
    </div>
  );
}
