import { Match, Show, Switch, type Component } from "solid-js";
import { Project, type Project as ProjectDetails } from "../../model/project";

type Props = {
  project: Project;
};

const ProjectDetails: Component<Props> = (props) => {
  const { id, status, dueDate, description } = props.project;

  return (
    <>
      <div>
        Status:
        {status}
        <Show when={dueDate}>
          <p>Due by: {dueDate}</p>
        </Show>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProjectDetails;
