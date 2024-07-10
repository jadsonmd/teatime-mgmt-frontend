import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieProdutoComponent } from './especie-produto.component';

describe('EspecieProdutoComponent', () => {
  let component: EspecieProdutoComponent;
  let fixture: ComponentFixture<EspecieProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecieProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecieProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
