import { Component, OnInit } from '@angular/core';
import {Filme} from "../modelo/filme";
import {FilmeService} from "../services/filme.service";

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {


  private filmeService: FilmeService;
  private filmes: Filme[];

  constructor(filmeService: FilmeService) {
    this.filmeService = filmeService;
  }

  ngOnInit(): void {
    this.listarFilmes();
  }

  private listarFilmes() {
    this.filmeService.listar().subscribe(filmes => this.filmes = filmes);
  }

  public excluir(filme: Filme) {
    this.filmeService.excluir(filme).subscribe(mensagem => {
      console.log(mensagem);
      this.listarFilmes();
    });
  }


}
