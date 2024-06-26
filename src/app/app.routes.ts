import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { IncluirEstoqueComponent } from './produto/incluir-estoque/incluir-estoque.component';
import { BaixarEstoqueComponent } from './produto/baixar-estoque/baixar-estoque.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'produto/incluir-estoque', component: IncluirEstoqueComponent},
    { path: 'produto/baixar-estoque', component: BaixarEstoqueComponent}
];
