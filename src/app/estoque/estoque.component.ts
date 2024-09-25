import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { TransferenciaEstoqueList } from '../interface/dto/transferencia-estoque-list';
import { TransferirEstoqueDTO } from '../interface/dto/transferir-estoque-dto';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog/transferir-estoque-dialog.component';
import { ReceberEstoqueDialogComponent } from './receber-estoque-dialog/receber-estoque-dialog.component';
import { HistoricoMovimentacaoItemDialogComponent } from './historico-movimentacao-item-dialog/historico-movimentacao-item-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TransferenciaEstoque } from '../interface/transferencia-estoque';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss',
})
export class EstoqueComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'codigo',
    'nome',
    'lote',
    'dataValidade',
    'unidade',
    'quantidade',
    'star',
  ];

  dataSource: MatTableDataSource<TransferenciaEstoqueList> = new MatTableDataSource<TransferenciaEstoqueList>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.produtoService.findAllTransferenciaEstoque().subscribe((estoques: TransferenciaEstoque[]) => {
      this.atualizarLista(estoques);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialogTransferir(transferirEstoqueDTO: TransferirEstoqueDTO): void {
    const dialogRef = this.dialog.open(TransferirEstoqueDialogComponent, {
      width: '700px',
      data: transferirEstoqueDTO,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.produtoService
          .findAllTransferenciaEstoque()
          .subscribe((estoques) => {
            this.atualizarLista(estoques);
          });
        this.openSnackBar('Transferencia criada!', 'OK', 'success');
      }
    });
  }

  openDialogReceber(): void {
    const dialogRef = this.dialog.open(ReceberEstoqueDialogComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.produtoService
          .findAllTransferenciaEstoque()
          .subscribe((estoques) => {
            this.atualizarLista(estoques);
          }
        );
      }
    });
  }

  openDialogHistorico(idProdutoItem: string): void {
    const dialogRef = this.dialog.open(HistoricoMovimentacaoItemDialogComponent, {
      width: '700px',
      data: idProdutoItem,
    });
  }

  atualizarLista(estoques: TransferenciaEstoque[]) {
    this.dataSource = new MatTableDataSource<TransferenciaEstoqueList>(estoques.map((estoque) => {
      return {
        id: estoque.id,
        codigoProduto: estoque.produtoItem.produto.codigo,
        nomeProduto: estoque.produtoItem.produto.nome,
        lote: estoque.produtoItem.lote,
        dataValidade: estoque.produtoItem.dataValidade,
        nomeUnidade: estoque.unidade.nome,
        quantidade: estoque.quantidade,
        idProdutoItem: estoque.idProdutoItem,
        idUnidade: estoque.idUnidade
      };
    }));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  transferir(estoque: TransferenciaEstoqueList): void {
    const transferirEstoqueDTO: TransferirEstoqueDTO = {
      idProdutoItem: estoque.idProdutoItem,
      idParceiro: "",
      quantidade: 0,
      idUnidadeOrigem: estoque.idUnidade,
      idUnidadeDestino: 0,
      observacao: '',
      idUsuarioTransferiu: '',
      quantidadeDisponivel: estoque.quantidade,
    };
    this.openDialogTransferir(transferirEstoqueDTO);
  }

  visualizarHistorico(estoque: TransferenciaEstoqueList): void {
    this.openDialogHistorico(estoque.idProdutoItem);
    
  }

  receber(): void {
    this.openDialogReceber();
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(msg: string, btn: string, tipo: string): void {
    this.snackBar.open(msg, btn, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: tipo,
    });
  }
}
