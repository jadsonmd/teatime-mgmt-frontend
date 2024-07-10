import { Component, OnInit } from '@angular/core';
import { TipoProduto } from '../tipo-produto';
import { CadastroService } from '../../service/cadastro.service';

@Component({
  selector: 'app-tipo-produto',
  templateUrl: './tipo-produto.component.html',
  styleUrl: './tipo-produto.component.scss'
})
export class TipoProdutoComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'nome',
    'star',
  ];

  dataSource: TipoProduto[] = [];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.cadastroService.findAllTipoProduto().subscribe((tipoProduto) => {
      this.dataSource = tipoProduto;
    });
  }

  apagar(element: any): void {
    console.log('Apagando', element);
  }

  editar(element: any): void {
    console.log('Editando', element);
  }

  incluir(): void {
    console.log('Incluindo');
  }
}
