import { Injectable } from '@nestjs/common';
import { ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [
    {
      id: '267627125715',
      completed: false,
      description: 'Task 1.',
    },
    {
      id: '2676271324343315',
      completed: true,
      description: 'Task 2.',
    },
  ];

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((i) => i.id === id);
  }

  createNew(task: Omit<ITask, 'id'>): ITask {
    const newTask: ITask = {
      ...task,
      id: new Date().getUTCMilliseconds().toString(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteOne(id: string): string {
    this.tasks = this.tasks.filter((i) => i.id !== id);
    return `Task ${id} deleted`;
  }
}
