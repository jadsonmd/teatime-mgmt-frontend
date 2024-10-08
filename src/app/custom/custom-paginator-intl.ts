import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

@Injectable()
export class CustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `Primeira página`;
  itemsPerPageLabel = `Itens por página :`;
  lastPageLabel = `Última página`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `1 de 1`;
    }

    const amountPages = Math.ceil(length / pageSize);
    return `${page + 1} - ${amountPages} de ${length.toLocaleString('pt-BR')}`;
  }
}