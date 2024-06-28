import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProdutoDialogComponent } from './novo-produto-dialog.component';

describe('NovoProdutoDialogComponent', () => {
  let component: NovoProdutoDialogComponent;
  let fixture: ComponentFixture<NovoProdutoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoProdutoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoProdutoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
