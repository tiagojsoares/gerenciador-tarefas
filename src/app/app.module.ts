import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {TarefasModule} from './tarefas';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule,AppRoutingModule,TarefasModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
