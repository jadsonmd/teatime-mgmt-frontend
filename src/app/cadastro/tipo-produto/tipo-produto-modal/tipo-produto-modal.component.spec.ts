import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoModalComponent } from './tipo-produto-modal.component';

describe('TipoProdutoModalComponent', () => {
  let component: TipoProdutoModalComponent;
  let fixture: ComponentFixture<TipoProdutoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoProdutoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
