import {
  Component,
  createEffect,
  createResource,
  Show,
  Suspense,
} from "solid-js";
import { useParams } from "@solidjs/router";
import ProjectForm from "../components/project/ProjectForm";
import { createStore } from "solid-js/store";
import { Project } from "../model/project";
import { getProject } from "../api/project";

const EditProjectPage: Component = () => {
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

  const handleFormSubmit = (e: Event) => {
    e.preventDefault();
    console.log(form);
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
