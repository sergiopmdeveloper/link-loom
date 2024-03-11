'use client';

import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';

/**
 * Submit button component.
 * @returns The component.
 */
export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'mt-5 rounded bg-gray-700 py-2 text-sm text-white hover:brightness-125 sm:text-base',
        pending && 'cursor-not-allowed opacity-75',
      )}
      type='submit'
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  );
}
