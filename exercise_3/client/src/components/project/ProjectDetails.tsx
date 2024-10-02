import { Match, Show, Switch, type Component } from "solid-js";
import {
  Project,
  ProjectStatus,
  type Project as ProjectDetails,
} from "../../model/project";

const statusColors: Record<string, string> = {
  open: "#d3d3d3", // muted gray
  inProgress: "#f0e68c", // muted yellow
  done: "#90ee90", // muted green
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

type Props = {
  status: ProjectStatus;
  dueDate?: string;
  description?: string;
};

const ProjectDetails: Component<Props> = (props) => {
  return (
    <>
      <div>
        <span>Status: </span>
        <span
          class="p-1 rounded-sm"
          style={{ background: statusColors[props.status] }}
        >
          {formatStatus(props.status)}
        </span>
        <Show when={props.dueDate}>
          <p>Due by: {props.dueDate}</p>
        </Show>
      </div>

      <div>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default ProjectDetails;
