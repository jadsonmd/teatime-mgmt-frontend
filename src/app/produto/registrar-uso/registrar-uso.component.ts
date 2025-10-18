import { Component } from '@angular/core';
import { GerenciarEstoqueDTO } from '../gerenciar-estoque-dto';
import { Produto } from '../produto';
import { ProdutoService } from '../../service/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoItemEntity } from '../produto-item-entity';
import { MatListOption } from '@angular/material/list';
import { RegistrarUso } from '../../interface/registrar-uso';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDatepicker } from '../../custom/custom-datepicker';
import { APP_DATE_FORMATS } from '../incluir-estoque/incluir-estoque.component';
import { RegistrarUsoService } from '../../service/registrar-uso.service';
import { Observable } from 'rxjs';
import { Unidade } from '../../interface/unidade';
import { ParceiroService } from '../../service/parceiro.service';

@Component({
  selector: 'app-registrar-uso',
  templateUrl: './registrar-uso.component.html',
  styleUrl: './registrar-uso.component.scss',
  providers: [
      { provide: DateAdapter, useClass: CustomDatepicker },
      { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    ],
})
export class RegistrarUsoComponent {

  prod!: Produto;
  produtoItens!: ProdutoItemEntity[];
  produtoItemSelecionado!: ProdutoItemEntity;

  unidades!: Observable<Unidade[]>;

  registrarUso: RegistrarUso = {
    id: '',
    idProdutoItem: '',
    idUsuario: '',
    dataHora: new Date(),
    idUnidade: '',
    idParceiro: '',
    numeroAtendimento: ''
  };

  constructor(
      private produtoService: ProdutoService,
      private registrarUsoService: RegistrarUsoService,
      private parceiroService: ParceiroService,
      private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.unidades = this.parceiroService.findAllUnidades();
  }

  onSubmit(): void {

    this.registrarUsoService.incluir(this.registrarUso).subscribe((data) => {
      if (data) {
        this.openSnackBar('Uso registrado com sucesso!', 'OK', 'success');
      }
    });
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  limparCampos(): void {
  }

  buscarItensProduto(): void {
    if (this.prod && this.prod.id) {
      this.produtoService
      .getAllProdutoItens(this.prod.id)
      .subscribe((data) => {
        this.produtoItens = data.filter((p) => p.quantidade > 0);
      }); 
    }
  }

  getItemSelecionado(item: MatListOption[]): void {
      this.produtoItemSelecionado = item.map((o) => o.value)[0];
    }

  openSnackBar(msg: string, btn: string, tipo: string): void {
    this.snackBar.open(msg, btn, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      panelClass: tipo,
    });
  }

}
