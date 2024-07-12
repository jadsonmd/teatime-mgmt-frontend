import { Component, Inject, OnInit } from '@angular/core';
import { TransferirEstoqueDTO } from '../transferir-estoque-dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from '../../service/produto.service';
import { ParceiroService } from '../../service/parceiro.service';
import { Observable } from 'rxjs';
import { Unidade } from '../transferencia-estoque-list';

@Component({
  selector: 'app-transferir-estoque-dialog',
  templateUrl: './transferir-estoque-dialog.component.html',
  styleUrl: './transferir-estoque-dialog.component.scss'
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
  };

  constructor(
    public dialogRef: MatDialogRef<TransferirEstoqueDialogComponent>,
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

}
