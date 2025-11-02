import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrarUsoDialogComponent } from './registrar-uso-dialog/registrar-uso-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarUso } from '../../interface/registrar-uso';
import { RegistrarUsoService } from '../../service/registrar-uso.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RegistrarUsoDTO } from '../../interface/dto/registrar-uso-dto';

@Component({
    selector: 'app-registrar-uso',
    templateUrl: './registrar-uso.component.html',
    styleUrl: './registrar-uso.component.scss',
    standalone: false
})
export class RegistrarUsoComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<RegistrarUsoDTO> = new MatTableDataSource<RegistrarUsoDTO>();

  displayedColumns: string[] = [
    'codigo',
    'nome',
    'lote',
    'dataInicioUso',
    'unidade',
    'usuario',
    'atendimento' 
  ];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private registrarUsoService: RegistrarUsoService
  ) {}

  ngOnInit() {
    this.registrarUsoService.findAll().subscribe((produtosEmUso) => {
      this.atualizarListaProdutos(produtosEmUso);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  atualizarListaProdutos(produtosEmUso: RegistrarUsoDTO[]) {
    this.dataSource = new MatTableDataSource<RegistrarUsoDTO>(produtosEmUso);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrarUsoDialogComponent, {
      width: '800px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if ('salvar' === result) {
        this.registrarUsoService
        .findAll()
        .subscribe((produtosEmUso) => (this.atualizarListaProdutos(produtosEmUso)));
        this.openSnackBar('Registrado com sucesso.', 'OK', 'success');
      }
    });
  }

  novo(): void {
    this.openDialog();
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
