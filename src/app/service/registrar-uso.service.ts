import { Injectable } from '@angular/core';
import { RegistrarUso } from '../interface/registrar-uso';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegistrarUsoDTO } from '../interface/dto/registrar-uso-dto';

@Injectable({
  providedIn: 'root',
})
export class RegistrarUsoService {
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

  incluir(registrarUso: RegistrarUso): Observable<RegistrarUso> {
    registrarUso.idParceiro = this.user.idParceiro;
    registrarUso.idUsuario = this.user.id;

    return this.httpClient.post<RegistrarUso>(
      `${environment.apiUrl}/api/teatime/registrar-uso`,
      registrarUso,
      this.httpOptions
    );
  }

  findAll(): Observable<RegistrarUsoDTO[]> {
    return this.httpClient.get<RegistrarUsoDTO[]>(
      `${environment.apiUrl}/api/teatime/registrar-uso/lista-produto-em-uso/idParceiro/${this.user.idParceiro}`,
      this.httpOptions
    );
  }

}
