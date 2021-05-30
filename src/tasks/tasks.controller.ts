import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll(): string {
    return 'This action returns all tasks';
  }
}
