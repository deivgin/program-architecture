import { z } from 'zod';

export const CreateProjectSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  description: z.string().trim().optional(),
  dueDate: z.string().optional(),
});

export type CreateProjectDto = z.infer<typeof CreateProjectSchema>;
