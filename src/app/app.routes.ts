import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { IncluirEstoqueComponent } from './produto/incluir-estoque/incluir-estoque.component';
import { BaixarEstoqueComponent } from './produto/baixar-estoque/baixar-estoque.component';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { EspecieProdutoComponent } from './cadastro/especie-produto/especie-produto.component';
import { DashboardProdutoComponent } from './produto/dashboard-produto/dashboard-produto.component';
import { UserInfoComponent } from './cadastro/user-info/user-info.component';
import { UnidadeMedidaComponent } from './cadastro/unidade-medida/unidade-medida.component';

export const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'produto/incluir-estoque', component: IncluirEstoqueComponent},
    { path: 'produto/baixar-estoque', component: BaixarEstoqueComponent},
    { path: 'produto/dashboard-produto', component: DashboardProdutoComponent},
    { path: 'estoque/estoque-unidade', component: EstoqueComponent },
    { path: 'cadastro/especie-produto', component: EspecieProdutoComponent },
    { path: 'cadastro/info-usuario', component: UserInfoComponent },
    { path: 'cadastro/unidade-medida', component: UnidadeMedidaComponent },
    { path: 'login/callback', component: LoginComponent },
    { path: '**', redirectTo: ''}

];
