import { createResource, Show, Suspense, type Component } from "solid-js";
import { type Project } from "../../model/project";
import { useParams } from "@solidjs/router";
import ProjectDetails from "./ProjectDetails";

const fetchProject = async (id: string) => {
  const response = await fetch(`http://localhost:3001/project/${id}`);
  return response.json();
};

const Project: Component = () => {
  const params = useParams();
  const [project] = createResource(params.id, fetchProject);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Show when={project()}>
        <ProjectDetails project={project()} />
      </Show>
    </Suspense>
  );
};

export default Project;
