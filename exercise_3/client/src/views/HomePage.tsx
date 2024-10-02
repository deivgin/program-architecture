import {
  createResource,
  For,
  Match,
  Show,
  Suspense,
  Switch,
  type Component,
} from "solid-js";
import ProjectItem from "../components/project/ProjectItem";
import { Project } from "../model/project";
import TopNav from "../components/TopNav";

const fetchProjects = async () => {
  const response = await fetch("http://localhost:3001/project");
  return response.json();
};

const Home: Component = () => {
  const [projects] = createResource<Project[]>(fetchProjects);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Match when={projects.error}>{projects.error.message}</Match>
        <Match when={projects()}>
          <ul class="flex flex-col gap-8 list-none py-8">
            <For each={projects()}>
              {(project) => (
                <li>
                  <ProjectItem project={project} />
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </Suspense>
  );
};

export default Home;
