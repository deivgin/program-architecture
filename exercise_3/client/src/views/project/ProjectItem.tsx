import { Component, createSignal, Show } from "solid-js";
import Button from "../../components/Button";
import ProjectDetails from "./ProjectDetails";
import { Project } from "../../model/project";

type Props = {
  project: Project;
};

const ProjectItem: Component<Props> = (props) => {
  const [showDetails, setShowDetails] = createSignal(false);

  return (
    <div class="border-2 border-gray rounded-lg px-3 py-6 flex flex-col">
      <div class="flex justify-between align-middle">
        <h2>{props.project.name}</h2>

        <div class="flex gap-2">
          <Button onClick={() => setShowDetails((prev) => !prev)}>View</Button>
          <Button type="warning">Delete</Button>
        </div>
      </div>

      <Show when={showDetails()}>
        <ProjectDetails project={props.project} />
      </Show>
    </div>
  );
};

export default ProjectItem;
