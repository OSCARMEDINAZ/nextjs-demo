import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InventoryStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status !== 'available',
          'bg-green-500 text-white': status === 'available',
        },
      )}
    >
      {status === 'available' ? (
        <>
          Available
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status !== 'available' ? (
        <>
          Not Available
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
