import { Component, Inject } from '@angular/core';
import { UnidadeMedida } from '../../../interface/unidade-medida';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnidadeMedidaService } from '../../../service/unidade-medida.service';

@Component({
  selector: 'app-unidade-medida-modal',
  templateUrl: './unidade-medida-modal.component.html',
  styleUrl: './unidade-medida-modal.component.scss'
})
export class UnidadeMedidaModalComponent {

  title: string = '';

  unidadeMedida!: UnidadeMedida;

  constructor(
    public dialogRef: MatDialogRef<UnidadeMedidaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UnidadeMedida,
    private unidadeMedidaService: UnidadeMedidaService
  ) { 
    this.unidadeMedida = data;
    this.title = this.unidadeMedida.id ? 'Editar Unidade de Medida' : 'Criar Unidade de Medida';
  }

  onSubmit(): void {
    if (!this.unidadeMedida.id) {
      this.unidadeMedidaService.save(this.unidadeMedida).subscribe((unidadeMedida: UnidadeMedida) => {
        if (unidadeMedida) {
          this.fecharModal('salvar');
        }
      });
    } else {
      this.unidadeMedidaService.update(this.unidadeMedida).subscribe((unidadeMedida: UnidadeMedida) => {
        if (unidadeMedida) {
          this.fecharModal('salvar');
        }
      });
    }
  }

  cancelar(): void {
    this.fecharModal('cancelar');
  }

  fecharModal(action: string): void {
    this.dialogRef.close(action);
  }

}
