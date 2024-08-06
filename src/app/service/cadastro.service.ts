import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../estoque/transferencia-estoque-list';
import { Observable } from 'rxjs';
import { EspecieProduto } from '../cadastro/especie-produto';
import { TipoProduto } from '../cadastro/tipo-produto';
import { environment } from '../../environments/environment';

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
      `${environment.apiUrl}/api/teatime/especie-produto/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  saveEspecieProduto(especieProduto: EspecieProduto) {
    especieProduto.idParceiro = this.user.idParceiro;
    return this.httpClient.post<EspecieProduto>(
      `${environment.apiUrl}/api/teatime/especie-produto`,
      especieProduto,
      this.httpOptions
    );
  }

  updateEspecieProduto(especieProduto: EspecieProduto) {
    return this.httpClient.put<EspecieProduto>(
      `${environment.apiUrl}/api/teatime/especie-produto`,
      especieProduto,
      this.httpOptions
    );
  }

  deleteEspecieProduto(especieProduto: EspecieProduto) {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/api/teatime/especie-produto/${especieProduto.id}`,
      this.httpOptions
    );
  }

  findAllTipoProduto(): Observable<TipoProduto[]> {
    return this.httpClient.get<TipoProduto[]>(
      `${environment.apiUrl}/api/teatime/tipo-produto/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  saveTipoProduto(tipoProduto: TipoProduto) {
    tipoProduto.idParceiro = this.user.idParceiro;
    return this.httpClient.post<TipoProduto>(
      `${environment.apiUrl}/api/teatime/tipo-produto`,
      tipoProduto,
      this.httpOptions
    );
  }

  updateTipoProduto(tipoProduto: TipoProduto) {
    return this.httpClient.put<TipoProduto>(
      `${environment.apiUrl}/api/teatime/tipo-produto`,
      tipoProduto,
      this.httpOptions
    );
  }

  deleteTipoProduto(tipoProduto: TipoProduto) {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/api/teatime/tipo-produto/${tipoProduto.id}`,
      this.httpOptions
    );
  }
}
