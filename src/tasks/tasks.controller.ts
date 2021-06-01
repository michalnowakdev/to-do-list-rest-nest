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

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'This action returns all tasks';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `found one ${id}`;
  }

  @Post()
  createNewTask(@Body() createTaskDto: CreateTaskDto): string {
    return `Created description = ${createTaskDto.description}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return `Deleted ${id}`;
  }

  @Put(':id')
  updateTask(@Body() updateTaskDto: CreateTaskDto, @Param('id') id): string {
    return `Update ${id} - Desc: ${updateTaskDto.description}`;
  }
}
