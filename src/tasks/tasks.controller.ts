import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { ITask } from './interfaces/task.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<ITask[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<ITask> {
    return this.tasksService.findOne(id);
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): Promise<ITask> {
    return this.tasksService.createNew(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<ITask> {
    return this.tasksService.deleteOne(id);
  }

  @Put(':id')
  updateTask(
    @Body() updateTaskDto: CreateTaskDto,
    @Param('id') id,
  ): Promise<ITask> {
    return this.tasksService.update(id, updateTaskDto);
  }
}
