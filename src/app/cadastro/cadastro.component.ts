import {Component, OnInit} from "@angular/core";
import {Filme} from "../modelo/filme";
import {FilmeService} from "../services/filme.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit  {

  private filmeService: FilmeService;
  private route: ActivatedRoute;
  private filme: Filme = new Filme();

  constructor(filmeService: FilmeService, route: ActivatedRoute) {
    this.filmeService = filmeService;
    this.route = route;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const codigo = params['id'];
      if (codigo) {
        this.buscarFilme(codigo);
      }
    });
  }

  public cadastrarFilme(event) {
    event.preventDefault();

    this.filmeService.cadastrar(this.filme)
      .subscribe(mensagem => {
        console.log(mensagem);
        this.filme =  new Filme();
      });
  }

  private buscarFilme(codigo: Number) {
    this.filmeService.buscarFilme(codigo).subscribe(filme => this.filme = filme);
  }

}

