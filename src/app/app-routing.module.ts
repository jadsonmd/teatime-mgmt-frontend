import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: async () =>
      (await import('./login/login.module')).LoginModule
  },
  {
    path: 'produto',
    loadChildren: async () =>
      (await import('./produto/produto.module')).ProdutoModule
  },
  {
    path: 'produto/incluir-estoque',
    loadChildren: async () =>
      (await import('./produto/incluir-estoque/incluir-estoque.module')).IncluirEstoqueModule
  },
  {
    path: 'produto/baixar-estoque',
    loadChildren: async () =>
      (await import('./produto/baixar-estoque/baixar-estoque.module')).BaixarEstoqueModule
  },
  {
    path: 'estoque/estoque-unidade',
    loadChildren: async () =>
      (await import('./estoque/estoque.module')).EstoqueModule
  },
  {
    path: 'cadastro/tipo-produto',
    loadChildren: async () =>
      (await import('./cadastro/tipo-produto/tipo-produto.module')).TipoProdutoModule
  },
  {
    path: 'cadastro/especie-produto',
    loadChildren: async () =>
      (await import('./cadastro/especie-produto/especie-produto.module')).EspecieProdutoModule
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
