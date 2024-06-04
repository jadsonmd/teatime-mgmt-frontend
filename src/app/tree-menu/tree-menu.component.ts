import { Component, ViewEncapsulation } from '@angular/core';
import { TreeMenu } from './tree-menu';
import { MenuFlatNode } from './menu-flat-node';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

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
      children: [
        { name: 'Produto' },
        { name: 'Incluir estoque' },
        { name: 'Baixar estoque' },
      ],
    },
    {
      name: 'Financeiro',
      children: [
        {
          name: 'Incluir Receita',
        },
        {
          name: 'Incluir Despesa',
        },
        {
          name: 'Relatorio',
        },
      ],
    },
  ];

  private _transformer = (node: TreeMenu, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
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

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;
}
