import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Filme } from '../cadastro/filme';
import { Observable } from 'rxjs';

@Injectable()
export class FilmeService {

  private urlServico: string = 'http://localhost:8085/talk-angular/rest/filme';
  private headers: Headers = new Headers();

  private http: Http;

  constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  public cadastrar(filme: Filme): Observable<String> {
    if (filme.codigo) {
      return this.http.put(this.urlServico, filme, { headers: this.headers })
        .map(() => 'Cadastro editado com sucesso');
    } else {
      return this.http.post(this.urlServico, filme, { headers: this.headers })
        .map(() => 'Cadastro salvo com sucesso');
    }
  }

  public listar(): Observable<Filme[]> {
    return this.http.get(this.urlServico).map(res => res.json());
  }

  public excluir(filme: Filme): Observable<String> {
    return this.http.delete(this.urlServico, { body: filme }).map(() => 'Cadastro excluido com sucesso');
  }

  public buscarFilme(codigo: Number): Observable<Filme> {
    return this.http.get(this.urlServico + '/buscar-por-id/' + codigo).map(res => res.json());
  }

  public verificarAutorizacao(rota: string): Observable<Response> {
    return this.http.get(this.urlServico + '/auth/?tela=' + rota);
  }
}
