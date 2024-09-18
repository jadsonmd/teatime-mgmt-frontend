import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../user-info';
import { ParceiroService } from '../../service/parceiro.service';
import { Unidade } from '../../estoque/transferencia-estoque-list';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from '../../service/usuario.service';
import { J } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {

  unidades!: Observable<Unidade[]>;
  disabledUnidade = false;
  disabledParceiro = false;

  userInfo!: UserInfo;
  
  constructor(private parceiroService: ParceiroService,
    public auth: AuthService,
    private router: Router) {
    this.userInfo = {
      id: '',
      idUnidade: null,
      idParceiro: '',
      name: '',
      email: ''
    }
   }

  ngOnInit(): void {
    const sessionUsuario = sessionStorage.getItem('usuario');

    if (sessionUsuario != null && sessionUsuario != 'null') {
      this.unidades = this.parceiroService.findAllUnidades();
      const user = JSON.parse(sessionUsuario);
      if (user.email !== 'jadsonmd@gmail.com') {
        this.disabledParceiro = true;
        this.disabledUnidade = true;
      }
      this.userInfo = {
        id: user.id,
        idUnidade: user.idUnidade,
        idParceiro: user.idParceiro,
        name: user.name,
        email: user.email
      }
    } else {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.auth.user$.subscribe((usr) => {
            if (usr && usr.sub) {
              const ids = usr.sub.split('|');
              this.userInfo = {
                id: ids.length > 1 ? ids[1] : ids[0],
                idUnidade: null,
                idParceiro: '',
                name: usr.nickname,
                email: usr.email
              }
              
            }
          });
        }
      });
    }
  }

  onSubmit(): void {
    this.parceiroService.saveUsuario(this.userInfo).subscribe((usuario) => {
      console.log(usuario);
      sessionStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate(['/']);
    });
  }

  buscarUnidades() {
    this.unidades = this.parceiroService.findAllUnidadesComParceiro(this.userInfo.idParceiro);
  }

}
