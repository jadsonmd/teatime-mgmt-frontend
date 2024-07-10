import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieProdutoModalComponent } from './especie-produto-modal.component';

describe('EspecieProdutoModalComponent', () => {
  let component: EspecieProdutoModalComponent;
  let fixture: ComponentFixture<EspecieProdutoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecieProdutoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecieProdutoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
