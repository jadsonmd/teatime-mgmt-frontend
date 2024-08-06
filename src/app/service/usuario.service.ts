import { Injectable } from '@angular/core';
import { ProdutoItem } from '../produto/produto-item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NovoProduto } from '../produto/novo-produto-dialog/novo-produto';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly httpClient: HttpClient,
    private authService: AuthService
  ) {
    // this.doAuthentication();
  }

  doAuthentication() {
    this.authService.getAccessTokenSilently().subscribe((token) => {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }),
      };
    });
  }

  findById(id: String): Observable<any[]> {
    return this.httpClient.get<ProdutoItem[]>(
      `${environment.apiUrl}/api/teatime/usuarios/${id}`,
      this.httpOptions
    );
  }
}
