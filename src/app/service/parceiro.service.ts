import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../estoque/transferencia-estoque-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParceiroService {

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  findAllUnidades(idParceiro: string): Observable<Unidade[]> {
    return this.httpClient.get<Unidade[]>(
      `http://localhost:4200/api/teatime/parceiros/unidades/${idParceiro}`,
      this.httpOptions
    );
  }
}
