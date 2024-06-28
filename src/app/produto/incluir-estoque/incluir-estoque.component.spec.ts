import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirEstoqueComponent } from './incluir-estoque.component';

describe('IncluirEstoqueComponent', () => {
  let component: IncluirEstoqueComponent;
  let fixture: ComponentFixture<IncluirEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
