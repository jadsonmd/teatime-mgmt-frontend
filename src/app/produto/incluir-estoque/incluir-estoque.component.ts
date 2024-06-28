import { Component } from '@angular/core';
import { Produto } from '../produto';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-incluir-estoque',
  templateUrl: './incluir-estoque.component.html',
  styleUrl: './incluir-estoque.component.scss'
})
export class IncluirEstoqueComponent {

  produtoItem: GerenciarEstoqueDTO = {
    idProduto: '',
    idProdutoItem: '',
    qtd: 0,
    lote: '',
    precoCompra: 0,
    dataValidade: '',
    inUso: false
  };

  prod!: Produto;

  constructor(private produtoService: ProdutoService) { }

  onSubmit(): void {
    this.produtoItem.idProduto = this.prod.id;

    this.produtoService.incluirEstoque(this.produtoItem).subscribe(
      () => {
        alert('Estoque incluído com sucesso!');
        this.limparCampos();
      },
      () => {
        alert('Erro ao incluir estoque!');
      }
    );
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  limparCampos(): void {
    this.produtoItem = {
      idProduto: '',
      idProdutoItem: '',
      qtd: 0,
      lote: '',
      precoCompra: 0,
      dataValidade: '',
      inUso: false
    };
  }

}
