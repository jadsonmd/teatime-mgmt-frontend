import { Component, Inject, OnInit } from '@angular/core';
import { TransferirEstoqueDTO } from '../../interface/dto/transferir-estoque-dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../../service/produto.service';
import { ParceiroService } from '../../service/parceiro.service';
import { Observable } from 'rxjs';
import { Unidade } from '../../interface/unidade';
import { I } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-transferir-estoque-dialog',
    templateUrl: './transferir-estoque-dialog.component.html',
    styleUrl: './transferir-estoque-dialog.component.scss',
    standalone: false
})
export class TransferirEstoqueDialogComponent implements OnInit {
  unidades!: Observable<Unidade[]>;

  transferirEstoque: TransferirEstoqueDTO = {
    idProdutoItem: "",
    idParceiro: "",
    quantidade: 0,
    idUnidadeOrigem: 0,
    idUnidadeDestino: 0,
    observacao: "",
    idUsuarioTransferiu: "",
    quantidadeDisponivel: 0
  };

  constructor(
    public dialogRef: MatDialogRef<TransferirEstoqueDialogComponent>,
    private snackBar: MatSnackBar,
    private produtoService: ProdutoService,
    private parceiroService: ParceiroService,
    @Inject(MAT_DIALOG_DATA) public data: TransferirEstoqueDTO,
  ) {
    this.transferirEstoque = data;
   }

  ngOnInit(): void {
    this.unidades = this.parceiroService.findAllUnidades();
  }

  onSubmit(): void {
    if (this.transferirEstoque.quantidade <= 0 || this.transferirEstoque.quantidade > this.transferirEstoque.quantidadeDisponivel) {
      this.openSnackBar('Quantidade deve ser maior que zero e menor que a quantidade disponível em estoque', 'Fechar', 'error');
      return;
    }
    
    if (this.transferirEstoque.idUnidadeOrigem === this.transferirEstoque.idUnidadeDestino) {
      this.openSnackBar('Unidade de origem e destino não podem ser iguais', 'Fechar', 'error');
      return;
    }

    if (this.transferirEstoque.idUnidadeDestino === 0) {
      this.openSnackBar('Selecione a unidade de destino', 'Fechar', 'alert');
      return;
    }

    this.produtoService
    .transferirEstoque(this.transferirEstoque)
    .subscribe((transf: any) => {
      if (transf) {
        this.fecharModal('salvar');
      }
    });
  }

  cancelar(): void {
    this.fecharModal('cancelar');
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
