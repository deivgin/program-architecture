import { Component, createSignal, Show } from "solid-js";
import Button from "../common/Button";
import ProjectDetails from "./ProjectDetails";
import { Project } from "../../model/project";
import { FiEdit, FiDelete } from "solid-icons/fi";
import { useNavigate } from "@solidjs/router";

type Props = {
  project: Project;
};

const ProjectItem: Component<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <div class="border-2 border-gray rounded-lg px-3 py-6 flex flex-col gap-2">
      <div class="flex justify-between align-middle">
        <h2>{props.project.name}</h2>

        <div>
          <Button
            border={false}
            onClick={() => navigate(`/edit/${props.project.id}`)}
          >
            <FiEdit />
          </Button>
          <Button type="warning" onClick={() => console.log("Delete project")}>
            <FiDelete />
          </Button>
        </div>
      </div>

      <ProjectDetails
        status={props.project.status}
        dueDate={props.project.dueDate}
        description={props.project.description}
      />
    </div>
  );
};

export default ProjectItem;
