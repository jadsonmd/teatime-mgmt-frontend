import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ProdutoItem } from './produto-item';
import { NovoProdutoDialogComponent } from './novo-produto-dialog/novo-produto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrl: './produto.component.scss',
    standalone: false
})
export class ProdutoComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
  dataSource: MatTableDataSource<ProdutoItem> = new MatTableDataSource<ProdutoItem>();

  produtosProximoVencer: ProdutoItem[] = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.produtoService
      .findAll()
      .subscribe((produtoItens) => {
        this.atualizarListaProdutos(produtoItens);

        const umMes = new Date();
        umMes.setMonth(umMes.getMonth() + 1);
        this.produtosProximoVencer = produtoItens.filter((prod: ProdutoItem) => {
          if(new Date(prod.dataValidade) < umMes && prod.quantidade > 0) {
            return true;
          }
          return false;
        });
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(produto: ProdutoItem | {}): void {
    const dialogRef = this.dialog.open(NovoProdutoDialogComponent, {
      width: '700px',
      data: produto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.produtoService
        .findAll()
        .subscribe((produtoItens) => (this.atualizarListaProdutos(produtoItens)));

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
          .subscribe((produtoItens) => (this.atualizarListaProdutos(produtoItens)));
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

  atualizarListaProdutos(produtoItens: ProdutoItem[]) {
    this.dataSource = new MatTableDataSource<ProdutoItem>(produtoItens);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectProduto(selected: any, produtoItem: ProdutoItem) {
    if (selected) 
      this.dataSource.filter = produtoItem.idProdutoItem;
    else 
      this.dataSource.filter = '';
  }

}
