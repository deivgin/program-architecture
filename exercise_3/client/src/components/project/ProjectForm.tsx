import { Component } from "solid-js";
import { Project } from "../../model/project";
import FormField from "../common/FormField";
import Button from "../common/Button";

type Props = {
  project: Project;
  onFormChange: ({ x }: { [x: string]: string }) => void;
  onFormSubmit: (e: Event) => void;
};

const ProjectForm: Component<Props> = (props) => {
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    props.onFormChange({ [name]: value });
  };

  return (
    <form class="flex flex-col gap-8" onSubmit={props.onFormSubmit}>
      <FormField for="name" label="Name" required>
        <input
          id="name"
          type="text"
          name="name"
          class="p-3 rounded-lg border-gray-light border-2"
          value={props.project.name}
          placeholder="Project name"
          required
          onChange={handleInputChange}
        />
      </FormField>

      <FormField for="status" label="Status" required>
        <select
          id="status"
          name="status"
          class="p-3 rounded-lg border-gray-light border-2"
          value={props.project.status}
          onChange={handleInputChange}
        >
          <option value="open">Open</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </FormField>

      <FormField for="description" label="Description">
        <textarea
          id="description"
          name="description"
          class="p-3 rounded-lg border-gray-light border-2"
          style={{ resize: "none" }}
          placeholder="Project's description"
          maxlength="500"
          rows="10"
          onChange={handleInputChange}
        >
          {props.project.description}
        </textarea>
      </FormField>

      <FormField for="date" label="Due Date">
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={props.project.dueDate}
          onChange={handleInputChange}
        />
      </FormField>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default ProjectForm;
