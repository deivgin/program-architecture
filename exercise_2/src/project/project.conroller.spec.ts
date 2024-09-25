import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';
import { Project } from './interface/project.interface';

describe('ProjectController', () => {
  let projectController: ProjectController;
  let projectService: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [ProjectService],
    }).compile();

    projectController = module.get<ProjectController>(ProjectController);
    projectService = module.get<ProjectService>(ProjectService);
  });

  describe('create', () => {
    it('should create a project', async () => {
      const createProjectDto: CreateProjectDto = {
        name: 'New Project',
        description: 'New Project description',
        dueDate: new Date().toDateString(),
      };

      const createdProject = await projectController.create(createProjectDto);
      expect(createdProject.name).toBe(createProjectDto.name);
    });
  });

  describe('findAll', () => {
    it('should return an array of projects', async () => {
      const result: Project[] = [
        {
          id: '1',
          status: 'open',
          name: 'Project 1',
          description: 'Project 1 description',
          dueDate: new Date().toDateString(),
        },
      ];

      jest.spyOn(projectService, 'findAll').mockImplementation(() => result);

      expect(await projectController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single project by id', async () => {
      const project: Project = {
        id: '1',
        status: 'open',
        name: 'Project 1',
        description: 'Project 1 description',
        dueDate: new Date().toDateString(),
      };

      jest.spyOn(projectService, 'findOne').mockImplementation(() => project);

      expect(await projectController.findOne('1')).toBe(project);
    });
  });

  describe('update', () => {
    it('should update a project', async () => {
      const updateProjectDto: UpdateProjectDto = {
        name: 'Updated Project',
        description: 'Updated Project description',
        status: 'done',
        dueDate: new Date().toDateString(),
      };

      await projectController.update('1', updateProjectDto);
      const project = await projectController.findOne('1');
      expect(project?.name).toBe(updateProjectDto.name);
    });
  });

  describe('delete', () => {
    it('should delete a project', async () => {
      await projectController.remove('1');
      const project = await projectController.findOne('1');
      expect(project).toBeNull();
    });
  });
});
