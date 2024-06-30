import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NovoProduto } from './novo-produto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoItem } from '../produto-item';

@Component({
  selector: 'app-novo-produto-dialog',
  templateUrl: './novo-produto-dialog.component.html',
  styleUrl: './novo-produto-dialog.component.scss',
})
export class NovoProdutoDialogComponent {
  title: string = '';
  idParceiro: string = '';
  idProduto: string = '';

  produto: NovoProduto = {
    id: '',
    idParceiro: '',
    codigo: '',
    nome: '',
    marca: '',
    precoVenda: 0,
    estoqueMin: 0,
    estoqueMax: 0,
    idTipoProduto: 0,
    idEspecieProduto: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<NovoProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService
  ) {
    this.produto = data;
    this.idProduto = data.idProduto;
    this.title = this.idProduto ? 'Editar Produto' : 'Criar Produto';
    const user = sessionStorage.getItem('usuario');
    if (user) {
      this.idParceiro = JSON.parse(user).idParceiro;
    }
  }

  onSubmit(): void {
    if (this.idProduto) {
      this.produto.id = this.idProduto;
      this.produto.idParceiro = this.idParceiro;
      this.produtoService
        .updateProduto(this.produto)
        .subscribe((prod: ProdutoItem) => {
          if (prod) {
            this.fecharModal('salvar');
          }
        });
    } else {
      this.produto.idParceiro = this.idParceiro;
      this.produtoService
        .saveProduto(this.produto)
        .subscribe((prod: ProdutoItem) => {
          if (prod) {
            this.fecharModal('salvar');
          }
        });
    }
  }

  cancelar(): void {
    this.fecharModal('cancelar');
  }

  fecharModal(action: string): void {
    console.log('tste');
    this.dialogRef.close(action);
  }
}
