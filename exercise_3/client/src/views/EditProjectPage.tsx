import { Component, createResource, Show, Suspense } from "solid-js";
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
      {/* <Suspense fallback={<>Loading...</>}>
        <Show when={project()}>
          <EditProjectForm project={project()} />
        </Show>
      </Suspense> */}
    </>
  );
};

export default EditProjectPage;
