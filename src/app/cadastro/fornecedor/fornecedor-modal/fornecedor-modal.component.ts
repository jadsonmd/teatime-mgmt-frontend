import { Component, Inject } from '@angular/core';
import { Fornecedor } from '../../../interface/fornecedor';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FornecedorService } from '../../../service/fornecedor.service';

@Component({
    selector: 'app-fornecedor-modal',
    templateUrl: './fornecedor-modal.component.html',
    styleUrl: './fornecedor-modal.component.scss',
    standalone: false
})
export class FornecedorModalComponent {

  title: string = '';

  fornecedor!: Fornecedor;

  constructor(
    public dialogRef: MatDialogRef<FornecedorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fornecedor,
    private fornecedorService: FornecedorService
  ) { 
    this.fornecedor = data;
    this.title = this.fornecedor.id ? 'Editar Fornecedor' : 'Criar Fornecedor';
  }

  onSubmit(): void {
    if (!this.fornecedor.id) {
      this.fornecedorService.save(this.fornecedor).subscribe((fornecedor: Fornecedor) => {
        if (fornecedor) {
          this.fecharModal('salvar');
        }
      });
    } else {
      this.fornecedorService.update(this.fornecedor).subscribe((fornecedor: Fornecedor) => {
        if (fornecedor) {
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
