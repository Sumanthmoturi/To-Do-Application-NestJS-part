import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  private todos = [];

  create(createTodoDto: CreateTodoDto) {
    this.todos.push(createTodoDto);
    return 'Todo created successfully';
  }

  findAll() {
    return this.todos;
  }
}
