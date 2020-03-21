import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefaComponent } from "./cadastrar";
//import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
  {
    path: "tarefas",
    redirectTo: "tarefas/listar"
  },
  {
    path: "tarefas/listar",
    component: ListarTarefaComponent
  },
  {
    path: "tarefas/cadastrar",
    component: CadastrarTarefaComponent
  }
];
