import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaModalComponent } from './unidade-medida-modal.component';

describe('UnidadeMedidaModalComponent', () => {
  let component: UnidadeMedidaModalComponent;
  let fixture: ComponentFixture<UnidadeMedidaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeMedidaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadeMedidaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
