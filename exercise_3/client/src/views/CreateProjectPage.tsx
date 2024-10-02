import { Component } from "solid-js";
import ProjectForm from "../components/project/ProjectForm";
import { createStore } from "solid-js/store";
import { type Project } from "../model/project";

const CreateProjectPage: Component = () => {
  const [form, setForm] = createStore<Project>({
    id: "",
    name: "",
    status: "open",
    description: "",
    dueDate: "",
  });

  const handleFormChange = (form: { [x: string]: string }) => {
    setForm(form);
  };

  const handleFormSubmit = (e: Event) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <ProjectForm
      project={form}
      onFormChange={handleFormChange}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default CreateProjectPage;
