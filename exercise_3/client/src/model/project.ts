import { Task } from "solid-js";

export type Project = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
};
