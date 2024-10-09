import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '../interface/fornecedor';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

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

  findAll(): Observable<Fornecedor[]> {
    return this.httpClient.get< Fornecedor[]>(
      `${environment.apiUrl}/api/teatime/fornecedores/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  save(fornecedor: Fornecedor) {
    fornecedor.idParceiro = this.user.idParceiro;
    return this.httpClient.post<Fornecedor>(
      `${environment.apiUrl}/api/teatime/fornecedores`,
      fornecedor,
      this.httpOptions
    );
  }

  update(fornecedor: Fornecedor) {
    return this.httpClient.put<Fornecedor>(
      `${environment.apiUrl}/api/teatime/fornecedores`,
      fornecedor,
      this.httpOptions
    );
  }

  delete(fornecedor: Fornecedor) {
    return this.httpClient.delete<void>(
      `${environment.apiUrl}/api/teatime/fornecedores/${fornecedor.id}`,
      this.httpOptions
    );
  }
}
