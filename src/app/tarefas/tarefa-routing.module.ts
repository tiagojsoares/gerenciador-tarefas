import { ListarTarefaComponent } from "./listar-tarefa";
import { Router } from "@angular/router";


export const TarefaRoutes: Router = [
  {
    path: "tarefas",
    redirectTo: "tarefas/listar"
  },{
    path:'tarefas/listar',
    Component:ListarTarefaComponent
  }
];
