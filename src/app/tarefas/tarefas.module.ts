import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TarefaService } from "./shared";
import { ListarTarefaComponent } from "./listar-tarefa/";
import { CadastrarTarefaComponent } from './cadastrar';


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ListarTarefaComponent, CadastrarComponent, CadastrarTarefaComponent],
  providers: [TarefaService]
})
export class TarefasModule {}
