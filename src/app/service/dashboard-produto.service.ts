import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardProdutoService {

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

  findAbaixoEstoqueMinimo(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/api/teatime/dashboard-produto/abaixo-estoque-minimo/${this.user.idParceiro}`, this.httpOptions);
  }

  findAcimaEstoqueMaximo(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/api/teatime/dashboard-produto/acima-estoque-maximo/${this.user.idParceiro}`, this.httpOptions);
  }

  findEstoqueZero(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/api/teatime/dashboard-produto/estoque-zero/${this.user.idParceiro}`, this.httpOptions);
  }

}
