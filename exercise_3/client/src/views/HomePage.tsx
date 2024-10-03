import {
  createResource,
  For,
  Match,
  Suspense,
  Switch,
  type Component,
} from "solid-js";
import ProjectItem from "../components/project/ProjectItem";
import { Project } from "../model/project";
import { getProjects } from "../api/project";

const Home: Component = () => {
  const [projects, { refetch }] = createResource<Project[]>(getProjects);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Match when={projects.error}>{projects.error.message}</Match>
        <Match when={projects()}>
          <ul class="flex flex-col gap-8 list-none py-8">
            <For each={projects()}>
              {(project) => (
                <li>
                  <ProjectItem project={project} refetch={refetch} />
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
