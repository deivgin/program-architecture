import {
  Component,
  createEffect,
  createResource,
  Show,
  Suspense,
} from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import ProjectForm from "../components/project/ProjectForm";
import { createStore } from "solid-js/store";
import { Project } from "../model/project";
import { getProject, updateProject } from "../api/project";

const EditProjectPage: Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [project] = createResource(params.id, getProject);

  const [form, setForm] = createStore<Project>({
    id: "",
    name: "",
    status: "open",
    description: "",
    dueDate: "",
  });

  createEffect(() => {
    if (project()) {
      setForm(project());
    }
  });

  const handleFormChange = (form: { [x: string]: string }) => {
    setForm(form);
  };

  const handleFormSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const request = await updateProject(params.id, form);

      if (!request.ok) {
        throw new Error("Failed to update project");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Show when={project()}>
          <ProjectForm
            project={form}
            onFormChange={handleFormChange}
            onFormSubmit={handleFormSubmit}
          />
        </Show>
      </Suspense>
    </>
  );
};

export default EditProjectPage;
