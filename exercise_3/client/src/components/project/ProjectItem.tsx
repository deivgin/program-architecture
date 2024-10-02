import { Component, createSignal, Show } from "solid-js";
import Button from "../common/Button";
import ProjectDetails from "./ProjectDetails";
import { Project } from "../../model/project";
import { FaSolidAngleDown, FaSolidAngleUp } from "solid-icons/fa";

type Props = {
  project: Project;
};

const ProjectItem: Component<Props> = (props) => {
  const [showDetails, setShowDetails] = createSignal(false);

  return (
    <div class="border-2 border-gray rounded-lg px-3 py-6 flex flex-col">
      <div class="flex justify-between align-middle">
        <h2>{props.project.name}</h2>

        <Button border={false} onClick={() => setShowDetails((prev) => !prev)}>
          {showDetails() ? <FaSolidAngleUp /> : <FaSolidAngleDown />}
        </Button>
      </div>

      <Show when={showDetails()}>
        <ProjectDetails
          status={props.project.status}
          dueDate={props.project.dueDate}
          description={props.project.description}
        />
      </Show>
    </div>
  );
};

export default ProjectItem;
