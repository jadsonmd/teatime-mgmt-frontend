import { Component, Inject, OnInit } from '@angular/core';
import { TransferirEstoqueDTO } from '../transferir-estoque-dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-transferir-estoque-dialog',
  templateUrl: './transferir-estoque-dialog.component.html',
  styleUrl: './transferir-estoque-dialog.component.scss'
})
export class TransferirEstoqueDialogComponent implements OnInit {

  user: any = {};

  transferirEstoque: TransferirEstoqueDTO = {
    idProdutoItem: "",
    idParceiro: "",
    quantidade: 0,
    idUnidadeOrigem: 0,
    idUnidadeDestino: 0,
    observacao: "",
    idUsuarioTransferiu: "",
  };

  constructor(
    public dialogRef: MatDialogRef<TransferirEstoqueDialogComponent>,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: TransferirEstoqueDTO,
  ) {
    this.transferirEstoque = data;
    const user = sessionStorage.getItem('usuario');
    if (user) {
      this.user = JSON.parse(user);
    }
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.transferirEstoque.idUsuarioTransferiu = this.user.id;
    this.transferirEstoque.idParceiro = this.user.idParceiro; 
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
    console.log('tste');
    this.dialogRef.close(action);
  }

}
