import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProdutoComponent } from './dashboard-produto.component';

describe('DashboardProdutoComponent', () => {
  let component: DashboardProdutoComponent;
  let fixture: ComponentFixture<DashboardProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
