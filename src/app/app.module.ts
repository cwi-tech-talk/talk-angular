import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {routing} from "./app.routes";
import {FilmeService} from "./services/filme.service";

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
