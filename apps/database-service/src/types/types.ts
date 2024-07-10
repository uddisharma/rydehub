import { z } from 'zod';

export const CreateUserInput = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const LoginUserInput = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string(),
});

export type CreateUserInputType = z.infer<typeof CreateUserInput>;

export type LoginUserInputType = z.infer<typeof LoginUserInput>;
