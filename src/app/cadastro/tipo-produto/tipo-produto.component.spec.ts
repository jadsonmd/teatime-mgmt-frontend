import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoComponent } from './tipo-produto.component';

describe('TipoProdutoComponent', () => {
  let component: TipoProdutoComponent;
  let fixture: ComponentFixture<TipoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
