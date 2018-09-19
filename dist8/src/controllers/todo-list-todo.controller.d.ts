import { Filter, Where } from '@loopback/repository';
import { TodoListRepository } from '../repositories';
import { Todo } from '../models';
export declare class TodoListTodoController {
    protected todoListRepo: TodoListRepository;
    constructor(todoListRepo: TodoListRepository);
    create(id: number, todo: Todo): Promise<Todo>;
    find(id: number, filter?: Filter): Promise<Todo[]>;
    patch(id: number, todo: Partial<Todo>, where?: Where): Promise<number>;
    delete(id: number, where?: Where): Promise<number>;
}
