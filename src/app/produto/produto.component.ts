import { Component, Inject, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ProdutoItem } from './produto-item';
import { NovoProdutoDialogComponent } from './novo-produto-dialog/novo-produto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NovoProduto } from './novo-produto-dialog/novo-produto';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.produtoService
      .findAll()
      .subscribe((produto) => (this.dataSource = produto));
  }

  openDialog(produto: ProdutoItem | {}): void {
    const dialogRef = this.dialog.open(NovoProdutoDialogComponent, {
      width: '700px',
      data: produto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        console.log('Produto salvo com sucesso.');
        this.produtoService
        .findAll()
        .subscribe((produto) => (this.dataSource = produto));

        this.openSnackBar('Produto salvo com sucesso.', 'OK', 'success');
      }
    });
  }

  novo(): void {
    const prod = {};
    this.openDialog(prod);
  }

  editar(produto: ProdutoItem): void {
    this.openDialog(produto);
  }

  openSnackBar(msg: string, btn: string, tipo: string): void {
    this.snackBar.open(msg, btn, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: tipo,
    });
  }

  apagar(produto: ProdutoItem): void {
    if (!produto.idProdutoItem) {
      this.produtoService.deleteProduto(produto.idProduto).subscribe(() => {
        this.produtoService
          .findAll()
          .subscribe((produto) => (this.dataSource = produto));
          this.openSnackBar(
            `Produto, código: ${produto.codigo}, excluído com sucesso.`,
            'OK',
            'success'
          );  
      });
    } else {
      this.openSnackBar(
        `Esse produto, código: ${produto.codigo}, já contém item(ns), não será possível excluí-lo.`,
        'OK',
        'alert'
      );
    }
  }
}
