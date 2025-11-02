import { Component } from '@angular/core';
import { DashboardProdutoService } from '../../service/dashboard-produto.service';
import { find } from 'rxjs';

@Component({
    selector: 'app-dashboard-produto',
    templateUrl: './dashboard-produto.component.html',
    styleUrl: './dashboard-produto.component.scss',
    standalone: false
})
export class DashboardProdutoComponent {

  produtos: any[] = [];
  descricao: string = 'Este produto está abaixo do estoque mínimo';
  readonly filterButtons = [
    { nome: 'Produtos abaixo do estoque mínimo', action: 'MINIMO' },
    { nome: 'Produtos acima do estoque máximo', action: 'MAXIMO' },
    { nome: 'Produtos com estoque zero', action: 'ZERO' },
  ];

  constructor(private dasboardProdutoService: DashboardProdutoService) { }
  
  findProdutos(selected: any, action: string) {
    if (selected) {
      if(action === 'MINIMO') {
        this.findAllProdutosAbaixoEstoqueMinimo();
      } else if(action === 'MAXIMO') {
        this.findAllProdutosAcimaEstoqueMaximo();
      } else if(action === 'ZERO') {
        this.findAllProdutosEstoqueZero();
      }
    } else {
      this.produtos = [];
    }
  }

  findAllProdutosAbaixoEstoqueMinimo() {
    this.descricao = 'Produto abaixo do estoque mínimo';
    this.dasboardProdutoService.findAbaixoEstoqueMinimo().subscribe((abaixoEstoqueMinimo) => {
      this.produtos = abaixoEstoqueMinimo.sort((a:any, b:any) => a.estoque - b.estoque);
    });
  }

  findAllProdutosAcimaEstoqueMaximo() {
    this.descricao = 'Produto acima do estoque máximo';
    this.dasboardProdutoService.findAcimaEstoqueMaximo().subscribe((acimaEstoqueMaximo) => {
      this.produtos = acimaEstoqueMaximo.sort((a:any, b:any) => a.estoque - b.estoque);;
    });
  }

  findAllProdutosEstoqueZero() {
    this.descricao = 'Produto com estoque zerado';
    this.dasboardProdutoService.findEstoqueZero().subscribe((estoqueZero) => {
      this.produtos = estoqueZero;
    });
  }

}
