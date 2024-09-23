import { Component, OnInit } from '@angular/core';
import { EspecieProduto } from '../../interface/especie-produto';
import { CadastroService } from '../../service/cadastro.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EspecieProdutoModalComponent } from './especie-produto-modal/especie-produto-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private cadastroService: CadastroService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.atualizarListaEspecieProduto();
  }

  atualizarListaEspecieProduto(): void {
    this.cadastroService.findAllEspecieProduto().subscribe((especieProduto) => {
      this.dataSource = especieProduto;
    });
  }

  apagar(element: any): void {
    this.cadastroService.deleteEspecieProduto(element).subscribe(() => {
      this.atualizarListaEspecieProduto();
      this.openSnackBar('Espécie de produto apagado com sucesso.', 'OK', 'success');
    });
  }

  editar(element: any): void {
    this.openDialog(element);
  }

  incluir(): void {
    const prod = {};
    this.openDialog(prod);
  }

  openDialog(especieProduto: EspecieProduto | {}): void {
    const dialogRef = this.dialog.open(EspecieProdutoModalComponent, {
      width: '700px',
      data: especieProduto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.atualizarListaEspecieProduto();
        this.openSnackBar('Espécie produto salvo com sucesso.', 'OK', 'success');
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
