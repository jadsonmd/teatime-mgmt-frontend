import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { TransferenciaEstoqueList } from './transferencia-estoque-list';
import { TransferirEstoqueDTO } from './transferir-estoque-dto';
import { ReceberEstoqueDTO } from './receber-estoque-dto';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransferirEstoqueDialogComponent } from './transferir-estoque-dialog/transferir-estoque-dialog.component';

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

  openDialog(transferirEstoqueDTO: TransferirEstoqueDTO): void {
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
    this.openDialog(transferirEstoqueDTO);
  }

  receber(estoque: TransferenciaEstoqueList): void {
    const receberEstoqueDTO: ReceberEstoqueDTO = {
      idTransferenciaEstoque: 'e9de63f6-a6b4-4096-aa57-7476a977a1c6',
      idTransferenciaEstoqueDetalhe: 'e7ca78aa-598d-41ed-9463-2ba9f2fa20f5',
      idUsuarioRecebeu: 'auth0|66579aa58313fe1b68ee0008',
    };
    this.produtoService.receberEstoque(receberEstoqueDTO).subscribe(() => {
      this.produtoService
        .findAllTransferenciaEstoque()
        .subscribe((estoques) => {
          this.dataSource = estoques;
        });
    });
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
