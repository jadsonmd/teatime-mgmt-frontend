import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMenu } from './tree-menu';
import { MenuFlatNode } from './menu-flat-node';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrl: './tree-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TreeMenuComponent {
  TREE_DATA: TreeMenu[] = [
    {
      name: 'Produto',
      link: 'produto',
      children: [
        { name: 'Produto', link: '/produto' },
        { name: 'Incluir estoque', link: '/produto/incluir-estoque'},
        { name: 'Baixar estoque', link: '/produto/baixar-estoque'},
        { name: 'Dashboard', link: '/produto/dashboard-produto'},
      ],
    },
    {
      name: 'Estoque',
      link: 'produto',
      children: [
        { name: 'Estoque unidade', link: '/estoque/estoque-unidade' },
      ],
    },
    {
      name: 'Financeiro',
      link: '/',
      children: [
        {
          name: 'Incluir receita',
          link: '/',
        },
        {
          name: 'Incluir despesa',
          link: '/',
        },
        {
          name: 'Relatorio',
          link: '/',
        },
      ],
    },
    {
      name: 'Cadastro',
      link: '/',
      children: [
        {
          name: 'Tipo produto',
          link: '/cadastro/tipo-produto',
        },
        {
          name: 'Espécie produto',
          link: '/cadastro/especie-produto',
        },
        {
          name: 'Informações usuário',
          link: '/cadastro/info-usuario',
        },
      ],
    },
  ];

  private _transformer = (node: TreeMenu, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      link: node.link,
    };
  };

  treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  abrir(link: string) {
    this.router.navigate([link]);
  }
}
