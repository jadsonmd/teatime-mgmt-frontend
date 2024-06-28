import { Component, Inject, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ProdutoItem } from './produto-item';
import { NovoProdutoDialogComponent } from './novo-produto-dialog/novo-produto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NovoProduto } from './novo-produto-dialog/novo-produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'nome',
    'marca',
    'lote',
    'estoque',
    'quantidade',
    'dataValidade',
    'star',
  ];
  dataSource: ProdutoItem[] = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.produtoService
      .findAll()
      .subscribe((produto) => (this.dataSource = produto));
  }

  openDialog(produto: ProdutoItem | {} ): void {
    const dialogRef = this.dialog.open(
      NovoProdutoDialogComponent, { width: '700px',
        data: produto,
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      this.produtoService
      .findAll()
      .subscribe((produto) => (this.dataSource = produto));
    });
  }

  novo(): void {
    const prod = {};
    this.openDialog(prod);
  }

  editar(produto: ProdutoItem): void {
    this.openDialog(produto);
  }

  apagar(produto: ProdutoItem): void {
    console.log('apagar', produto.idProduto);
    
    this.produtoService.deleteProduto(produto.idProduto).subscribe(() => {
      this.produtoService
      .findAll()
      .subscribe((produto) => (this.dataSource = produto));
    });
  }
}
