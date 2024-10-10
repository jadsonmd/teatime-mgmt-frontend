import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./login/login.module')).LoginModule
  },
  {
    path: 'produto',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./produto/produto.module')).ProdutoModule
  },
  {
    path: 'produto/incluir-estoque',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./produto/incluir-estoque/incluir-estoque.module')).IncluirEstoqueModule
  },
  {
    path: 'produto/baixar-estoque',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./produto/baixar-estoque/baixar-estoque.module')).BaixarEstoqueModule
  },
  {
    path: 'produto/dashboard-produto',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./produto/dashboard-produto/dashboard-produto.module')).DashboardProdutoModule
  },
  {
    path: 'estoque/estoque-unidade',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./estoque/estoque.module')).EstoqueModule
  },
  {
    path: 'cadastro/tipo-produto',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./cadastro/tipo-produto/tipo-produto.module')).TipoProdutoModule
  },
  {
    path: 'cadastro/especie-produto',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./cadastro/especie-produto/especie-produto.module')).EspecieProdutoModule
  },
  {
    path: 'cadastro/info-usuario',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./cadastro/user-info/user-info.module')).UserInfoModule
  },
  {
    path: 'cadastro/unidade-medida',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./cadastro/unidade-medida/unidade-medida.module')).UnidadeMedidaModule
  },
  {
    path: 'cadastro/fornecedor',
    canActivate: [authGuardFn],
    loadChildren: async () =>
      (await import('./cadastro/fornecedor/fornecedor.module')).FornecedorModule
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
