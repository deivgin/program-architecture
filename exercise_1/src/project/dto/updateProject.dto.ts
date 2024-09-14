import { z } from 'zod';

export const UpdateProjectSchema = z.object({
  name: z.string().min(1),
  status: z.enum(['open', 'inProgress', 'done']),
  description: z.string().optional(),
  dueDate: z.string().optional(),
});

export type UpdateProjectDto = z.infer<typeof UpdateProjectSchema>;
