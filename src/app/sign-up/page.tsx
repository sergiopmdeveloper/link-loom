'use client';

import { signUp } from '@/app/actions/auth/sign-up';
import SubmitButton from '@/app/sign-up/components/SubmitButton';
import { SignUpState } from '@/app/types/auth';
import Link from 'next/link';
import { useFormState } from 'react-dom';

// States

const signUpState: SignUpState = {
  name: [],
  email: [],
  password: [],
  userAlreadyExists: false,
};

/**
 * Sign-up page component.
 * @returns The component.
 */
export default function Page() {
  const [formState, formAction] = useFormState(signUp, signUpState);

  return (
    <main className='relative flex h-screen w-screen items-center justify-center'>
      <Link
        className='absolute right-5 top-5 rounded bg-gray-700 px-2 py-1.5 text-white hover:brightness-125'
        href='/'
      >
        Back to home
      </Link>
      <div className='relative w-[30rem] rounded bg-slate-100 p-6'>
        {formState.userAlreadyExists && (
          <span className='absolute -top-8 right-0 rounded bg-red-300 px-1.5 py-0.5 text-xs text-red-700'>
            User already exists
          </span>
        )}
        <h1 className='mb-5 text-3xl font-semibold'>Sign up</h1>
        <form className='flex flex-col' action={formAction}>
          <div className='flex flex-col gap-4'>
            <div className='relative flex flex-col gap-1.5'>
              <label htmlFor='name'>Name</label>
              <input
                className='rounded px-2 py-2'
                type='text'
                name='name'
                id='name'
                placeholder='Your name...'
                autoComplete='username'
              />
              {formState.name.length > 0 && (
                <span className='absolute right-0 top-0.5 rounded bg-red-300 px-1.5 py-0.5 text-xs text-red-700'>
                  {formState.name[0]}
                </span>
              )}
            </div>
            <div className='relative flex flex-col gap-1.5'>
              <label htmlFor='email'>Email</label>
              <input
                className='rounded px-2 py-2'
                type='text'
                name='email'
                id='email'
                placeholder='Your email...'
                autoComplete='email'
              />
              {formState.email.length > 0 && (
                <span className='absolute right-0 top-0.5 rounded bg-red-300 px-1.5 py-0.5 text-xs text-red-700'>
                  {formState.email[0]}
                </span>
              )}
            </div>
            <div className='relative flex flex-col gap-1.5'>
              <label htmlFor='password'>Password</label>
              <input
                className='rounded px-2 py-2'
                type='password'
                name='password'
                id='password'
                placeholder='Your password...'
                autoComplete='current-password'
              />
              {formState.password.length > 0 && (
                <span className='absolute right-0 top-0.5 rounded bg-red-300 px-1.5 py-0.5 text-xs text-red-700'>
                  {formState.password[0]}
                </span>
              )}
            </div>
          </div>
          <span className='mt-5 text-sm'>
            Already have an account?{' '}
            <Link
              className='cursor-pointer text-blue-500 underline'
              href='/sign-in'
            >
              Sign in
            </Link>
          </span>
          <SubmitButton />
        </form>
      </div>
    </main>
  );
}
