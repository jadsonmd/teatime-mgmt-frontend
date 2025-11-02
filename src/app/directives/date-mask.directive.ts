import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appDateMask]',
    standalone: false
})
export class DateMaskDirective {

  private previousValue: string = '';

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2); // dd/
    }

    if (value.length > 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9); // dd/MM/yyyy
    }

    if (value.length > 10) {
      value = value.substring(0, 10); // Limita a 10 caracteres
    }

    input.value = value;
  }
}
