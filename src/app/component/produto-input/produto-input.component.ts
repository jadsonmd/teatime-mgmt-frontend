import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ProdutoService } from '../../service/produto.service';
import { Produto } from '../../produto/produto';

@Component({
  selector: 'app-produto-input',
  templateUrl: './produto-input.component.html',
  styleUrl: './produto-input.component.scss',
})
export class ProdutoInputComponent {
  stateCtrl = new FormControl('');
  filteredProdutos: Observable<Produto[]>;
  produtos: Produto[] = [];

  @Output() produtoSelecionadoEvent = new EventEmitter<Produto>();

  constructor(private produtoService: ProdutoService) {
    this.produtoService.getAllProdutos().subscribe((prod) => {
      console.log('produtos', prod);

      this.produtos = prod;
    });

    this.filteredProdutos = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((produto) =>
        produto ? this._filterProdutos(produto) : this.produtos.slice()
      )
    );
  }

  private _filterProdutos(value: string): Produto[] {
    if (typeof value === 'object') return [value];
    const filterValue = value.toLowerCase();
    return this.produtos.filter((produto) =>
      this.displayFn(produto).toLowerCase().includes(filterValue)
    );
  }

  selecionaProduto(prodEvent: Produto): void {
    this.produtoSelecionadoEvent.emit(prodEvent);
  }

  displayFn(produto: Produto): string {
    return produto ? `${produto.codigo} - ${produto.nome}` : '';
  }

  onChange(event: any): void {
    if (!event.target.value) {
      const produto = {
        id: '',
        codigo: '',
        nome: '',
        marca: '',
        precoVenda: 0,
        estoqueMin: 0,
        estoqueMax: 0,
        estoque: 0,
        idParceiro: '',
        idTipoProduto: 0,
        idEspecieProduto: 0,
      };
      this.selecionaProduto(produto);
    }
  }
}
