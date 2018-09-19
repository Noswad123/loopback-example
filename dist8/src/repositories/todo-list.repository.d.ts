import { DefaultCrudRepository, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { TodoList, Todo } from '../models';
import { TodoRepository } from './todo.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id> {
    protected datasource: juggler.DataSource;
    protected todoRepository: TodoRepository;
    todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    constructor(datasource: juggler.DataSource, todoRepository: TodoRepository);
}
