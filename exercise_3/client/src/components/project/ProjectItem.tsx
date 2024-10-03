import { Component } from "solid-js";
import Button from "../common/Button";
import ProjectDetails from "./ProjectDetails";
import { Project } from "../../model/project";
import { FiEdit, FiDelete } from "solid-icons/fi";
import { useNavigate } from "@solidjs/router";
import { deleteProject } from "../../api/project";

type Props = {
  project: Project;
};

const ProjectItem: Component<Props> = (props) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${props.project.id}`);
  };

  const handleDelete = async () => {
    try {
      await deleteProject(props.project.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="border-2 border-gray rounded-lg px-3 py-6 flex flex-col gap-2">
      <div class="flex justify-between align-middle">
        <h2>{props.project.name}</h2>

        <div>
          <Button border={false} onClick={handleEdit}>
            <FiEdit />
          </Button>
          <Button type="warning" onClick={handleDelete}>
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
