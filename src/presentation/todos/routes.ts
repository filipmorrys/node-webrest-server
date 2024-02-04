
import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasource } from "../../domain";
import { TodoDatasourceImpl } from "../../infraestructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infraestructure/repositories/todo.repository.impl";


export class TodosRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource)
    const todoController = new TodosController(todoRepository);

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getTodoById);
    router.post("/", todoController.createTodo);
    router.put("/:id", todoController.updateTodo);
    router.delete("/:id", todoController.deleteTodo);

    return router;
  }
}
