import { Component } from "solid-js";

const CreateProjectPage: Component = () => {
  return (
    <>
      <form action="/project" method="post" class="project">
        <div class="form__input__group">
          <label for="name">
            Name <span aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Project name"
            required
          />
        </div>

        <div class="form__input__group">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Project's description"
            value="{{description}}"
            maxlength="500"
            rows="10"
          ></textarea>
        </div>

        <div class="form__input__group">
          <label for="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value="{{dueDate}}" />
        </div>

        <button class="button button__primary" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default CreateProjectPage;
