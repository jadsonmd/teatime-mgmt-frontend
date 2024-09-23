import { Component, Inject } from '@angular/core';
import { TipoProduto } from '../../../interface/tipo-produto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadastroService } from '../../../service/cadastro.service';

@Component({
  selector: 'app-tipo-produto-modal',
  templateUrl: './tipo-produto-modal.component.html',
  styleUrl: './tipo-produto-modal.component.scss'
})
export class TipoProdutoModalComponent {

  title: string = '';

  tipoProduto!: TipoProduto;

  constructor(
    public dialogRef: MatDialogRef<TipoProdutoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TipoProduto,
    private cadastroService: CadastroService
  ) { 
    this.tipoProduto = data;
    this.title = this.tipoProduto.id ? 'Editar Tipo de Produto' : 'Criar Tipo de Produto';
  }

  onSubmit(): void {
    if (!this.tipoProduto.id) {
      this.cadastroService.saveTipoProduto(this.tipoProduto).subscribe((tipoProduto: TipoProduto) => {
        if (tipoProduto) {
          this.fecharModal('salvar');
        }
      });
    } else {
      this.cadastroService.updateTipoProduto(this.tipoProduto).subscribe((tipoProduto: TipoProduto) => {
        if (tipoProduto) {
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
