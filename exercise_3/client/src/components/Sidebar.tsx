import { A } from "@solidjs/router";
import { type Component } from "solid-js";

const Sidebar: Component = () => {
  return (
    <aside class="bg-gray-dark text-white h-[100vh] w-[120px]">
      <nav class="flex flex-col p-4 gap-8">
        <div class="font-bold text-lg">
          <A href="/">Prio</A>
        </div>

        <ul>
          <li>
            <A href="/project">Project</A>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
