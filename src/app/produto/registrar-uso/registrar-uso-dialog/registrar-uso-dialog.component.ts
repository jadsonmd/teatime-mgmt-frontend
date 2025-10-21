import { Component, Inject } from '@angular/core';
import { ProdutoService } from '../../../service/produto.service';
import { RegistrarUsoService } from '../../../service/registrar-uso.service';
import { ParceiroService } from '../../../service/parceiro.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegistrarUso } from '../../../interface/registrar-uso';
import { Observable } from 'rxjs';
import { Unidade } from '../../../interface/unidade';
import { Produto } from '../../produto';
import { ProdutoItemEntity } from '../../produto-item-entity';
import { MatListOption } from '@angular/material/list';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomDatepicker } from '../../../custom/custom-datepicker';
import { APP_DATE_FORMATS } from '../../incluir-estoque/incluir-estoque.component';

@Component({
  selector: 'app-registrar-uso-dialog',
  templateUrl: './registrar-uso-dialog.component.html',
  styleUrl: './registrar-uso-dialog.component.scss',
  providers: [
    { provide: DateAdapter, useClass: CustomDatepicker },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class RegistrarUsoDialogComponent {
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
    numeroAtendimento: '',
  };

  constructor(
    private produtoService: ProdutoService,
    private registrarUsoService: RegistrarUsoService,
    private parceiroService: ParceiroService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RegistrarUsoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.unidades = this.parceiroService.findAllUnidades();
  }

  onSubmit(): void {
    this.registrarUso.idProdutoItem = this.produtoItemSelecionado.id;
    this.registrarUsoService.incluir(this.registrarUso).subscribe((data) => {
      if (data) {
        this.openSnackBar('Uso registrado com sucesso!', 'OK', 'success');
        this.fecharModal('salvar');
      }
    });
  }

  selecionaProduto(prod: Produto): void {
    this.prod = prod;
  }

  limparCampos(): void {}

  buscarItensProduto(): void {
    if (this.prod && this.prod.id) {
      this.produtoService.getAllProdutoItens(this.prod.id).subscribe((data) => {
        this.produtoItens = data.filter((p) => p.quantidade > 0);
      });
    }
  }

  getItemSelecionado(item: MatListOption[]): void {
    this.produtoItemSelecionado = item.map((o) => o.value)[0];
  }

  cancelar(): void {
    this.fecharModal('cancelar');
  }

  fecharModal(action: string): void {
    this.dialogRef.close(action);
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
