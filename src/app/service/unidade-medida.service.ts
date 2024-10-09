import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadeMedida } from '../interface/unidade-medida';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadeMedidaService {

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

  findAll(): Observable<UnidadeMedida[]> {
    return this.httpClient.get< UnidadeMedida[]>(
      `${environment.apiUrl}/api/teatime/unidades-medida/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  save(unidadeMedida: UnidadeMedida) {
    unidadeMedida.idParceiro = this.user.idParceiro;
    return this.httpClient.post<UnidadeMedida>(
      `${environment.apiUrl}/api/teatime/unidades-medida`,
      unidadeMedida,
      this.httpOptions
    );
  }

  update(unidadeMedida: UnidadeMedida) {
    return this.httpClient.put<UnidadeMedida>(
      `${environment.apiUrl}/api/teatime/unidades-medida`,
      unidadeMedida,
      this.httpOptions
    );
  }

  delete(unidadeMedida: UnidadeMedida) {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/api/teatime/unidades-medida/${unidadeMedida.id}`,
      this.httpOptions
    );
  }

}
