import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProdutosComponent } from './atualizar-produtos.component';

describe('AtualizarProdutosComponent', () => {
  let component: AtualizarProdutosComponent;
  let fixture: ComponentFixture<AtualizarProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarProdutosComponent]
    });
    fixture = TestBed.createComponent(AtualizarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
