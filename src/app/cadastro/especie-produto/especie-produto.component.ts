import { Component, OnInit } from '@angular/core';
import { EspecieProduto } from '../especie-produto';
import { CadastroService } from '../../service/cadastro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-especie-produto',
  templateUrl: './especie-produto.component.html',
  styleUrl: './especie-produto.component.scss'
})
export class EspecieProdutoComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'nome',
    'prefixo',
    'star',
  ];

  dataSource: EspecieProduto[] = [];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.cadastroService.findAllEspecieProduto().subscribe((especieProduto) => {
      this.dataSource = especieProduto;
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
