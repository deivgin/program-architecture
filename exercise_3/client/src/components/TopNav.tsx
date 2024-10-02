import { A, useLocation, useParams } from "@solidjs/router";
import { Component, createEffect, createMemo, Match, Switch } from "solid-js";

const parsePath = (path: string) => {
  return path.split("/").filter((p) => p !== "");
};

const getHeading = (location: string[]) => {
  if (location.includes("create")) {
    return "Create Project";
  }

  return "Projects";
};

const TopNav: Component = () => {
  const location = useLocation();
  const pathname = createMemo(() => parsePath(location.pathname));

  return (
    <header>
      <h1>{getHeading(pathname())}</h1>
      <Switch>
        <Match when={!pathname().length}>
          <A href="/create">Create Project</A>
        </Match>
        <Match when={pathname().length}>
          <A href="/">Back</A>
        </Match>
      </Switch>
    </header>
  );
};

export default TopNav;
