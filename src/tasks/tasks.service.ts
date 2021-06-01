import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDeleteTaskResponse, ITask } from './interfaces/task.interface';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<ITask>) {}

  async findAll(): Promise<ITask[]> {
    return await this.taskModel.find();
  }

  async findOne(id: string): Promise<ITask> {
    return await this.taskModel.findOne({ _id: id });
  }

  async createNew(task: Omit<ITask, 'id'>): Promise<ITask> {
    const createdTask = await this.taskModel.create(task);
    return createdTask;
  }

  async deleteOne(id: string): Promise<ITask> {
    return await this.taskModel.findByIdAndRemove(id);
  }

  async update(id: string, task: Omit<ITask, 'id'>): Promise<ITask> {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
