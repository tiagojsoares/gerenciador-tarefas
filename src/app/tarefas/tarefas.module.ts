import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TarefaService } from './shared/tarefa.service';


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
  ],
  providers: [TarefaService]
})
export class TarefasModule {}
