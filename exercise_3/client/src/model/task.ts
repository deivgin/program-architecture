export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
};
