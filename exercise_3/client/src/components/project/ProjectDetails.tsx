import { Match, Show, Switch, type Component } from "solid-js";
import {
  Project,
  ProjectStatus,
  type Project as ProjectDetails,
} from "../../model/project";

const statusColors: Record<string, string> = {
  open: "#d3d3d3",
  inProgress: "#f0e68c",
  done: "#90ee90",
};

const formatStatus = (status: ProjectStatus) => {
  switch (status) {
    case "open":
      return "Open";
    case "inProgress":
      return "In Progress";
    case "done":
      return "Done";
    default:
      return "";
  }
};

const formatDate = (date: string | undefined) => {
  if (!date) return "";

  return new Date(date).toISOString().split("T")[0];
};

type Props = {
  status: ProjectStatus;
  dueDate?: string;
  description?: string;
};

const ProjectDetails: Component<Props> = (props) => {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex justify-between align-middle">
        <div>
          <span>Status: </span>
          <span
            class="p-1 rounded-sm"
            style={{ background: statusColors[props.status] }}
          >
            {formatStatus(props.status)}
          </span>
        </div>
        <Show when={props.dueDate}>
          <div>
            <span>Due by: </span>
            <span>{formatDate(props.dueDate)}</span>
          </div>
        </Show>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default ProjectDetails;
