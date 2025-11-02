import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoItemEntity } from '../produto-item-entity';
import { MatListOption } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-baixar-estoque',
    templateUrl: './baixar-estoque.component.html',
    styleUrl: './baixar-estoque.component.scss',
    standalone: false
})
export class BaixarEstoqueComponent {
  produtoItem: GerenciarEstoqueDTO = {
    idParceiro: '',
    idProduto: '',
    idProdutoItem: '',
    qtd: 0,
    lote: '',
    precoCompra: 0,
    dataValidade: '',
    inUso: false,
    idUnidadeDestino: 0,
    idUsuarioRecebeu: '',
  };

  produtoItens!: ProdutoItemEntity[];
  produtoItemSelecionado!: ProdutoItemEntity;

  prod!: Produto;

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {}

  buscarItensProduto(): void {
    if (this.prod && this.prod.id) {
      this.produtoService
      .getAllProdutoItens(this.prod.id)
      .subscribe((data) => {
        this.produtoItens = data.filter((p) => p.quantidade > 0);
      }); 
    }
  }

  onSubmit(): void {
    if (this.produtoItemSelecionado && this.produtoItemSelecionado.idProduto === this.prod.id) {
      this.produtoItem = {
        idParceiro: '',
        idProduto: this.produtoItemSelecionado.idProduto,
        idProdutoItem: this.produtoItemSelecionado.id,
        qtd: this.produtoItem.qtd,
        lote: this.produtoItemSelecionado.lote,
        precoCompra: this.produtoItemSelecionado.precoCompra,
        dataValidade: this.produtoItemSelecionado.dataValidade,
        inUso: false,
        idUnidadeDestino: 0,
        idUsuarioRecebeu: '',
      };
      this.produtoService.baixarEstoque(this.produtoItem).subscribe((data) => {
        if (data) {
          this.openSnackBar('Estoque baixado com sucesso!', 'OK', 'success');
        }
      });
    } else {
      this.openSnackBar('O produto selecionado não é o mesmo do item selecionado. Refaça a consulta!', 'OK', 'alert');
    }
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  getItemSelecionado(item: MatListOption[]): void {
    this.produtoItemSelecionado = item.map((o) => o.value)[0];
  }

  openSnackBar(msg: string, btn: string, tipo: string): void {
    this.snackBar.open(msg, btn, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: tipo
    });
  }
}
