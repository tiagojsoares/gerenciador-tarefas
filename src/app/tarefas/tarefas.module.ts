import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TarefaService } from "./shared";
import { ListarTarefaComponent } from "./listar-tarefa/";
import { CadastrarComponent } from './cadastrar/';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ListarTarefaComponent, CadastrarComponent],
  providers: [TarefaService]
})
export class TarefasModule {}
