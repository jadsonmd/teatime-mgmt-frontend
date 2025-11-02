import { Component, Inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/produto.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TransferenciaEstoqueDetalhe } from '../../interface/transferencia-estoque-detalhe';
import { MatListOption } from '@angular/material/list';
import { ReceberEstoqueDTO } from '../../interface/dto/receber-estoque-dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-receber-estoque-dialog',
    templateUrl: './receber-estoque-dialog.component.html',
    styleUrl: './receber-estoque-dialog.component.scss',
    standalone: false
})
export class ReceberEstoqueDialogComponent implements OnInit {
  observacao: string = '';
  transferenciaEstoqueDetalhes: TransferenciaEstoqueDetalhe[] = [];
  transferenciaEstoqueDetalhe!: TransferenciaEstoqueDetalhe;

  constructor(
    public dialogRef: MatDialogRef<ReceberEstoqueDialogComponent>,
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.findItensReceber();
  }

  findItensReceber(): void {
    this.produtoService
      .findAllTransferenciaEstoquePendenteRecebimento()
      .subscribe((transferenciaEstoqueDetalhes) => {
        this.transferenciaEstoqueDetalhes = transferenciaEstoqueDetalhes;
      });
  }

  getItemSelecionado(item: MatListOption[]): void {
    this.transferenciaEstoqueDetalhe = item.map((o) => o.value)[0];
  }

  onSubmit(): void {
    if (this.transferenciaEstoqueDetalhe) {
      const receberEstoqueDTO: ReceberEstoqueDTO = {
        idTransferenciaEstoque:
          this.transferenciaEstoqueDetalhe.idTransferenciaEstoque,
        idTransferenciaEstoqueDetalhe: this.transferenciaEstoqueDetalhe.id,
        idUsuarioRecebeu: '',
        observacao: this.observacao
      };
      this.produtoService.receberEstoque(receberEstoqueDTO).subscribe(() => {
        this.findItensReceber();
        this.fecharModal('salvar');
        this.openSnackBar('Recebimento realizado!', 'OK', 'success');
      });
    }
  }

  cancelar(): void {
    this.fecharModal('salvar');
  }

  fecharModal(action: string): void {
    this.dialogRef.close(action);
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
