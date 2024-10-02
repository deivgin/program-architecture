import { Component } from "solid-js";
import { Project } from "../../model/project";

type Props = {
  project: Project;
};

const ProjectForm: Component<Props> = (props) => {
  const { id, name, status, description, dueDate } = props.project;

  return (
    <form action="/project/{{id}}" method="post" class="project">
      <input type="hidden" name="_method" value="put" />
      <input type="hidden" name="id" value="{{id}}" />

      <div class="form__input__group">
        <label for="name">
          Name <span aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="Project name"
          required
        />
      </div>

      <div class="form__input__group">
        <label for="status">Status</label>
        <select id="status" name="status" value={status}>
          <option value="open">Open</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div class="form__input__group">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Project's description"
          maxlength="500"
          rows="10"
        >
          {description}
        </textarea>
      </div>

      <div class="form__input__group">
        <label for="dueDate">Due Date</label>
        <input type="date" id="dueDate" name="dueDate" value={dueDate} />
      </div>

      <button class="button button__primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default ProjectForm;
