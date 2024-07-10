import { Component, Inject } from '@angular/core';
import { EspecieProduto } from '../../especie-produto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadastroService } from '../../../service/cadastro.service';

@Component({
  selector: 'app-especie-produto-modal',
  templateUrl: './especie-produto-modal.component.html',
  styleUrl: './especie-produto-modal.component.scss'
})
export class EspecieProdutoModalComponent {

  title: string = '';

  especieProduto!: EspecieProduto;

  constructor(
    public dialogRef: MatDialogRef<EspecieProdutoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EspecieProduto,
    private cadastroService: CadastroService
  ) { 
    this.especieProduto = data;
    this.title = this.especieProduto.id ? 'Editar Espécie de Produto' : 'Criar Espécie de Produto';
  }

  onSubmit(): void {
    if (!this.especieProduto.id) {
      this.cadastroService.saveEspecieProduto(this.especieProduto).subscribe((especieProduto: EspecieProduto) => {
        if (especieProduto) {
          this.fecharModal('salvar');
        }
      });
    } else {
      this.cadastroService.updateEspecieProduto(this.especieProduto).subscribe((especieProduto: EspecieProduto) => {
        if (especieProduto) {
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
