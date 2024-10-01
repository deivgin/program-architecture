import { lazy, type ParentComponent } from "solid-js";
import "./index.css";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

const HomePage = lazy(() => import("./views/HomePage"));
const ProjectPage = lazy(() => import("./views/project/ProjectPage"));
const CreateProjectPage = lazy(
  () => import("./views/create/CreateProjectPage")
);
const EditProjectPage = lazy(() => import("./views/edit/EditProjectPage"));

const App: ParentComponent = ({ children }) => {
  return <main>{children}</main>;
};

render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/project/:id" component={ProjectPage} />
      <Route path="/create" component={CreateProjectPage} />
      <Route path="/edit/:id" component={EditProjectPage} />
    </Router>
  ),
  document.getElementById("root")!
);
