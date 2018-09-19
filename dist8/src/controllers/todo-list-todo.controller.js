"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
let TodoListTodoController = class TodoListTodoController {
    constructor(todoListRepo) {
        this.todoListRepo = todoListRepo;
    }
    async create(id, todo) {
        return await this
            .todoListRepo
            .todos(id)
            .create(todo);
    }
    async find(id, filter) {
        return await this
            .todoListRepo
            .todos(id)
            .find(filter);
    }
    async patch(id, todo, where) {
        return await this
            .todoListRepo
            .todos(id)
            .patch(todo, where);
    }
    async delete(id, where) {
        return await this
            .todoListRepo
            .todos(id)
            .delete(where);
    }
};
__decorate([
    rest_1.post('/todo-lists/{id}/todos'),
    __param(0, rest_1.param.path.number('id')), __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoListTodoController.prototype, "create", null);
__decorate([
    rest_1.get('/todo-lists/{id}/todos'),
    __param(0, rest_1.param.path.number('id')), __param(1, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoListTodoController.prototype, "find", null);
__decorate([
    rest_1.patch('/todo-lists/{id}/todos'),
    __param(0, rest_1.param.path.number('id')), __param(1, rest_1.requestBody()), __param(2, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], TodoListTodoController.prototype, "patch", null);
__decorate([
    rest_1.del('/todo-lists/{id}/todos'),
    __param(0, rest_1.param.path.number('id')), __param(1, rest_1.param.query.string('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoListTodoController.prototype, "delete", null);
TodoListTodoController = __decorate([
    __param(0, repository_1.repository(repositories_1.TodoListRepository)),
    __metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListTodoController);
exports.TodoListTodoController = TodoListTodoController;
//# sourceMappingURL=todo-list-todo.controller.js.map