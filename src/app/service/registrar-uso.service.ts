import { Injectable } from '@angular/core';
import { RegistrarUso } from '../interface/registrar-uso';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsoService {

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

  incluir(registrarUso: RegistrarUso): Observable<RegistrarUso> {
    registrarUso.idUsuario = this.user.idParceiro;
    return this.httpClient.post<RegistrarUso>(`${environment.apiUrl}/api/teatime/registro-uso`, registrarUso, this.httpOptions);
  }
}
