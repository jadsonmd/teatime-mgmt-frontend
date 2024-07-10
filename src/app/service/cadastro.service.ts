import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../estoque/transferencia-estoque-list';
import { Observable } from 'rxjs';
import { EspecieProduto } from '../cadastro/especie-produto';
import { TipoProduto } from '../cadastro/tipo-produto';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  user: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly httpClient: HttpClient) {
    const user = sessionStorage.getItem('usuario');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  findAllEspecieProduto(): Observable<EspecieProduto[]> {
    return this.httpClient.get<EspecieProduto[]>(
      `http://localhost:4200/api/teatime/especie-produto/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  findAllTipoProduto(): Observable<TipoProduto[]> {
    return this.httpClient.get<TipoProduto[]>(
      `http://localhost:4200/api/teatime/tipo-produto/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }
}
