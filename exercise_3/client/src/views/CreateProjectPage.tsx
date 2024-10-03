import { Component } from "solid-js";
import ProjectForm from "../components/project/ProjectForm";
import { createStore } from "solid-js/store";
import { type Project } from "../model/project";
import { createProject } from "../api/project";
import { useNavigate } from "@solidjs/router";

const CreateProjectPage: Component = () => {
  const navigate = useNavigate();
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

  const handleFormSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const request = await createProject(form);

      if (!request.ok) {
        throw new Error("Failed to create project");
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
