import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../estoque/transferencia-estoque-list';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserInfo } from '../cadastro/user-info';

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
      `${environment.apiUrl}/api/teatime/parceiros/unidades/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

  findAllUnidadesComParceiro(idParceiro: string): Observable<Unidade[]> {    
    return this.httpClient.get<Unidade[]>(
      `${environment.apiUrl}/api/teatime/parceiros/unidades/${idParceiro}`,
      this.httpOptions
    );
  }

  saveUsuario(user: UserInfo): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>(
      `${environment.apiUrl}/api/teatime/usuarios`,
      user,
      this.httpOptions
    );
  }
}
