import { A, useLocation } from "@solidjs/router";
import { Component, createMemo, Match, Switch } from "solid-js";

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
    <header class="flex justify-between align-middle py-5">
      <h1>{getHeading(pathname())}</h1>
      <Switch>
        <Match when={!pathname().length}>
          <A class="self-center" href="/create">
            Create Project
          </A>
        </Match>
        <Match when={pathname().length}>
          <A class="self-center" href="/">
            Back
          </A>
        </Match>
      </Switch>
    </header>
  );
};

export default TopNav;
