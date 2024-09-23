import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { TransferenciaEstoqueList } from './transferencia-estoque-list';
import { TransferirEstoqueDTO } from './transferir-estoque-dto';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog/transferir-estoque-dialog.component';
import { ReceberEstoqueDialogComponent } from './receber-estoque-dialog/receber-estoque-dialog.component';
import { HistoricoMovimentacaoItemDialogComponent } from './historico-movimentacao-item-dialog/historico-movimentacao-item-dialog.component';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss',
})
export class EstoqueComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'nome',
    'lote',
    'dataValidade',
    'unidade',
    'quantidade',
    'star',
  ];

  dataSource: TransferenciaEstoqueList[] = [];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.produtoService.findAllTransferenciaEstoque().subscribe((estoques) => {
      this.dataSource = estoques;
    });
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
            this.dataSource = estoques;
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
            this.dataSource = estoques;
          });
        // this.openSnackBar('Recebimento realizado!', 'OK', 'success');
      }
    });
  }

  openDialogHistorico(idProdutoItem: string): void {
    const dialogRef = this.dialog.open(HistoricoMovimentacaoItemDialogComponent, {
      width: '700px',
      data: idProdutoItem,
    });
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
    };
    this.openDialogTransferir(transferirEstoqueDTO);
  }

  visualizarHistorico(estoque: TransferenciaEstoqueList): void {
    this.openDialogHistorico(estoque.idProdutoItem);
    
  }

  receber(): void {
    this.openDialogReceber();
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
