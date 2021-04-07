import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsVerificadorComponent } from './docs-verificador.component';

describe('DocsVerificadorComponent', () => {
  let component: DocsVerificadorComponent;
  let fixture: ComponentFixture<DocsVerificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsVerificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsVerificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
