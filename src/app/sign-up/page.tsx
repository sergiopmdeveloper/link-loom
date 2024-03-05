import { signUp } from '@/app/actions/auth/sign-up';
import Link from 'next/link';

/**
 * Sign-up page component.
 * @returns The component.
 */
export default function Page() {
  return (
    <main className='relative flex h-screen w-screen items-center justify-center'>
      <Link
        className='absolute right-5 top-5 rounded bg-gray-700 px-2 py-1.5 text-white hover:brightness-125'
        href='/'
      >
        Back to home
      </Link>
      <div className='w-[30rem] rounded bg-slate-100 p-6'>
        <h1 className='mb-5 text-3xl font-semibold'>Sign up</h1>
        <form className='flex flex-col' action={signUp}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='name'>Name</label>
              <input
                className='rounded px-2 py-2'
                type='text'
                name='name'
                id='name'
                placeholder='Your name...'
                autoComplete='username'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='email'>Email</label>
              <input
                className='rounded px-2 py-2'
                type='text'
                name='email'
                id='email'
                placeholder='Your email...'
                autoComplete='email'
              />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor='password'>Password</label>
              <input
                className='rounded px-2 py-2'
                type='password'
                name='password'
                id='password'
                placeholder='Your password...'
                autoComplete='current-password'
              />
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
          <button
            className='mt-5 rounded bg-gray-700 py-2 text-white hover:brightness-125'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
