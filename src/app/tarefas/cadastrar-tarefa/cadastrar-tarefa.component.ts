import { Component, OnInit,ViewChild } from "@angular/core";
import { Tarefa } from "../shared";
import { NgForm } from "@angular/forms";


@Component({
  selector: "app-cadastrar-tarefa",
  templateUrl: "./cadastrar-tarefa.component.html",
  styleUrls: ["./cadastrar-tarefa.component.css"]
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild("formTarefa", { static: true }) formTarefa: NgForm;
  tarefa:Tarefa;
  constructor() {}

  ngOnInit() {}
}
