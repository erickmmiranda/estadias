import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsValidadosComponent } from './docs-validados.component';

describe('DocsValidadosComponent', () => {
  let component: DocsValidadosComponent;
  let fixture: ComponentFixture<DocsValidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsValidadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsValidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
