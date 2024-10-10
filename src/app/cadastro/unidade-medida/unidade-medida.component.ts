import { Component, OnInit } from '@angular/core';
import { UnidadeMedida } from '../../interface/unidade-medida';
import { UnidadeMedidaService } from '../../service/unidade-medida.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UnidadeMedidaModalComponent } from './unidade-medida-modal/unidade-medida-modal.component';

@Component({
  selector: 'app-unidade-medida',
  templateUrl: './unidade-medida.component.html',
  styleUrl: './unidade-medida.component.scss'
})
export class UnidadeMedidaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'star'];

  dataSource: UnidadeMedida[] = [];

  constructor(
    private unidadeMedidaService: UnidadeMedidaService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.atualizarListaUnidadeMedida();
  }

  atualizarListaUnidadeMedida(): void {
    this.unidadeMedidaService.findAll().subscribe((unidadeMedida) => {
      this.dataSource = unidadeMedida;
    });
  }

  apagar(element: any): void {
    this.unidadeMedidaService.delete(element).subscribe(() => {
      this.atualizarListaUnidadeMedida();
      this.openSnackBar('Unidade de medida apagado com sucesso.', 'OK', 'success');
    });
  }

  editar(element: any): void {
    this.openDialog(element);
  }

  incluir(): void {
    const prod = {};
    this.openDialog(prod);
  }

  openDialog(unidadeMedida: UnidadeMedida | {}): void {
    const dialogRef = this.dialog.open(UnidadeMedidaModalComponent, {
      width: '700px',
      data: unidadeMedida,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.atualizarListaUnidadeMedida();
        this.openSnackBar('Unidade de medida salva com sucesso.', 'OK', 'success');
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
