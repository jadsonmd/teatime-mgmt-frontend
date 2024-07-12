import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../estoque/transferencia-estoque-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParceiroService {

  user: any;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    const user = sessionStorage.getItem('usuario');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  findAllUnidades(): Observable<Unidade[]> {
    return this.httpClient.get<Unidade[]>(
      `http://localhost:4200/api/teatime/parceiros/unidades/${this.user.idParceiro}`,
      this.httpOptions
    );
  }
}
