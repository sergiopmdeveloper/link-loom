'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

/**
 * Signs up the user with the provided form data.
 * @param {FormData} formData - The form data containing the user's credentials.
 * @returns A promise that resolves when the sign-up process is complete.
 */
export async function signUp(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new ExistingUserError();
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
    name: 'name',
    value: newUser.name,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });

  cookies().set({
    name: 'id',
    value: newUser.id.toString(),
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });

  redirect(`/account/${newUser.id}`);
}

// Custom errors

/**
 * Error thrown when attempting to sign up an existing user.
 */
class ExistingUserError extends Error {
  constructor() {
    super('ExistingUserError');
    this.message = 'User already exists';
  }
}
