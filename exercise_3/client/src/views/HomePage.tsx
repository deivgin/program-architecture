import {
  createResource,
  For,
  Match,
  Show,
  Suspense,
  Switch,
  type Component,
} from "solid-js";
import ProjectItem from "./project/ProjectItem";
import { Project } from "../model/project";

const fetchProjects = async () => {
  const response = await fetch("http://localhost:3001/project");
  return response.json();
};

const Home: Component = () => {
  const [projects] = createResource<Project[]>(fetchProjects);

  return (
    <>
      <header>
        <h1>Projects</h1>
        <a href="/create" class="button button__primary">
          Create Project
        </a>
      </header>
      <article>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Match when={projects.error}>{projects.error.message}</Match>
            <Match when={projects()}>
              <ul class="project-list">
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
      </article>
    </>
  );
};

export default Home;
