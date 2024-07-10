import { Component, OnInit } from '@angular/core';
import { TipoProduto } from '../tipo-produto';
import { CadastroService } from '../../service/cadastro.service';
import { TipoProdutoModalComponent } from './tipo-produto-modal/tipo-produto-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private cadastroService: CadastroService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.atualizarListaTipoProduto();
  }

  atualizarListaTipoProduto(): void {
    this.cadastroService.findAllTipoProduto().subscribe((tipoProduto) => {
      this.dataSource = tipoProduto;
    });
  }

  apagar(element: any): void {
    this.cadastroService.deleteTipoProduto(element).subscribe(() => {
      this.atualizarListaTipoProduto();
      this.openSnackBar('Tipo de produto apagado com sucesso.', 'OK', 'success');
    });
  }

  editar(element: any): void {
    this.openDialog(element);
  }

  incluir(): void {
    const prod = {};
    this.openDialog(prod);
  }

  openDialog(tipoProduto: TipoProduto | {}): void {
    const dialogRef = this.dialog.open(TipoProdutoModalComponent, {
      width: '700px',
      data: tipoProduto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.atualizarListaTipoProduto();
        this.openSnackBar('Tipo produto salvo com sucesso.', 'OK', 'success');
      }
    });
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
