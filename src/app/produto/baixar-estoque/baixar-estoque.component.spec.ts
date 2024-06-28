import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixarEstoqueComponent } from './baixar-estoque.component';

describe('BaixarEstoqueComponent', () => {
  let component: BaixarEstoqueComponent;
  let fixture: ComponentFixture<BaixarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaixarEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaixarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
