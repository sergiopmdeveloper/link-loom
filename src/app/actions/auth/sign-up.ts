'use server';

import { SignUpState } from '@/app/types/auth';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as Z from 'zod';

/**
 * Signs up the user with the provided form data.
 * @param {FormData} formData - The form data containing the user's credentials.
 * @returns A promise that resolves when the sign-up process is complete.
 */
export async function signUp(_: SignUpState, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validatedFields = signUpSchema.safeParse({
    name: name,
    email: email,
    password: password,
  });

  if (!validatedFields.success) {
    return {
      name: validatedFields.error.flatten().fieldErrors.name ?? [],
      email: validatedFields.error.flatten().fieldErrors.email ?? [],
      password: validatedFields.error.flatten().fieldErrors.password ?? [],
      userAlreadyExists: false,
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return {
      name: [],
      email: [],
      password: [],
      userAlreadyExists: true,
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  cookies().set({
    name: 'id',
    value: newUser.id.toString(),
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });

  redirect(`/account/${newUser.id}`);
}

// Validation

const signUpSchema = Z.object({
  name: Z.string().min(1, 'Required'),
  email: Z.string().min(1, 'Required').email('Invalid email'),
  password: Z.string().min(1, 'Required').min(6, 'Too short'),
});
