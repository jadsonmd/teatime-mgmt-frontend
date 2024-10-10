import { Component } from '@angular/core';
import { Fornecedor } from '../../interface/fornecedor';
import { FornecedorService } from '../../service/fornecedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FornecedorModalComponent } from './fornecedor-modal/fornecedor-modal.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.scss'
})
export class FornecedorComponent {

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'fone', 'email', 'star'];

  dataSource: Fornecedor[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.atualizarListaFornecedor();
  }

  atualizarListaFornecedor(): void {
    this.fornecedorService.findAll().subscribe((fornecedor) => {
      this.dataSource = fornecedor;
    });
  }

  apagar(element: any): void {
    this.fornecedorService.delete(element).subscribe(() => {
      this.atualizarListaFornecedor();
      this.openSnackBar('Fornecedor apagado com sucesso.', 'OK', 'success');
    });
  }

  editar(element: any): void {
    this.openDialog(element);
  }

  incluir(): void {
    const prod = {};
    this.openDialog(prod);
  }

  openDialog(fornecedor: Fornecedor | {}): void {
    const dialogRef = this.dialog.open(FornecedorModalComponent, {
      width: '700px',
      data: fornecedor,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.atualizarListaFornecedor();
        this.openSnackBar('Fornecedor salvo com sucesso.', 'OK', 'success');
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
