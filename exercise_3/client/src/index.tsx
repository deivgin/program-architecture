import { createSignal, lazy, type ParentComponent } from "solid-js";
import "./index.css";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import Sidebar from "./components/Sidebar";
import { type Project } from "./model/project";

const Home = lazy(() => import("./views/home/Home"));
const Project = lazy(() => import("./views/project/Project"));

const App: ParentComponent = ({ children }) => {
  return (
    <div class="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/project" component={Project} />
    </Router>
  ),
  document.getElementById("root")!
);
