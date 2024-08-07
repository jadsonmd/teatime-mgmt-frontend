import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NovoProduto } from './novo-produto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoItem } from '../produto-item';
import { CadastroService } from '../../service/cadastro.service';
import { EspecieProduto } from '../../cadastro/especie-produto';
import { Observable } from 'rxjs';
import { TipoProduto } from '../../cadastro/tipo-produto';

@Component({
  selector: 'app-novo-produto-dialog',
  templateUrl: './novo-produto-dialog.component.html',
  styleUrl: './novo-produto-dialog.component.scss',
})
export class NovoProdutoDialogComponent implements OnInit {
  title: string = '';
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

  especieProdutos!: Observable<EspecieProduto[]>;
  tipoProdutos!: Observable<TipoProduto[]>;

  constructor(
    public dialogRef: MatDialogRef<NovoProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService,
    private cadastroService: CadastroService
  ) {
    this.produto = data;
    this.idProduto = data.idProduto;
    this.title = this.idProduto ? 'Editar Produto' : 'Criar Produto';
  }

  ngOnInit(): void {
    this.especieProdutos = this.cadastroService.findAllEspecieProduto();
    this.tipoProdutos = this.cadastroService.findAllTipoProduto();
  }

  onSubmit(): void {
    if (this.idProduto) {
      this.produto.id = this.idProduto;
      this.produtoService
        .updateProduto(this.produto)
        .subscribe((prod: ProdutoItem) => {
          if (prod) {
            this.fecharModal('salvar');
          }
        });
    } else {
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
    this.dialogRef.close(action);
  }
}
