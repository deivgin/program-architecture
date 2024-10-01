import { Component, createResource, Show, Suspense } from "solid-js";
import EditProjectForm from "./EditProjectForm";
import { A, useParams } from "@solidjs/router";

const fetchProject = async (id: string) => {
  const response = await fetch(`http://localhost:3001/project/${id}`);
  return response.json();
};

const EditProjectPage: Component = () => {
  const params = useParams();
  const [project] = createResource(params.id, fetchProject);

  return (
    <>
      <header>
        <h1>Edit</h1>
        <A href="/" class="button button__primary">
          Back
        </A>
      </header>

      <Suspense fallback={<>Loading...</>}>
        <Show when={project()}>
          <EditProjectForm project={project()} />
        </Show>
      </Suspense>
    </>
  );
};

export default EditProjectPage;
