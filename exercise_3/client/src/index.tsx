import { lazy, type ParentComponent } from "solid-js";
import "./index.css";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import TopNav from "./components/TopNav";

const HomePage = lazy(() => import("./views/HomePage"));
const ProjectPage = lazy(() => import("./components/project/ProjectPage"));
const CreateProjectPage = lazy(() => import("./views/CreateProjectPage"));
const EditProjectPage = lazy(() => import("./views/EditProjectPage"));

const App: ParentComponent = ({ children }) => {
  return (
    <div class="my-0 mx-auto w-[50%]">
      <TopNav />
      <main>{children}</main>
    </div>
  );
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
