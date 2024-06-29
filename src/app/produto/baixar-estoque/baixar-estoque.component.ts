import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { ProdutoService } from '../../service/produto.service';
import { ProdutoItemEntity } from '../produto-item-entity';
import { ProdutoItem } from '../produto-item';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-baixar-estoque',
  templateUrl: './baixar-estoque.component.html',
  styleUrl: './baixar-estoque.component.scss',
})
export class BaixarEstoqueComponent {
  produtoItem: GerenciarEstoqueDTO = {
    idProduto: '',
    idProdutoItem: '',
    qtd: 0,
    lote: '',
    precoCompra: 0,
    dataValidade: '',
    inUso: false,
  };

  produtoItens!: ProdutoItemEntity[];
  produtoItemSelecionado!: ProdutoItemEntity;

  prod!: Produto;

  constructor(private produtoService: ProdutoService) {}

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
      console.log(this.produtoItemSelecionado);
      this.produtoItem = {
        idProduto: this.produtoItemSelecionado.idProduto,
        idProdutoItem: this.produtoItemSelecionado.id,
        qtd: this.produtoItem.qtd,
        lote: this.produtoItemSelecionado.lote,
        precoCompra: this.produtoItemSelecionado.precoCompra,
        dataValidade: this.produtoItemSelecionado.dataValidade,
        inUso: false,
      };
      this.produtoService.baixarEstoque(this.produtoItem).subscribe((data) => {
        if (data) {
          alert('Estoque baixado com sucesso!'); 
        }
      });
    } else {
      alert('O produto selecionado não é o mesmo do item selecionado. Refaça a consulta!'); 
    }
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  getItemSelecionado(item: MatListOption[]): void {
    this.produtoItemSelecionado = item.map((o) => o.value)[0];
    console.log(this.produtoItemSelecionado);
  }

}
