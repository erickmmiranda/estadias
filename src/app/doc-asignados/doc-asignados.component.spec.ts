import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAsignadosComponent } from './doc-asignados.component';

describe('DocAsignadosComponent', () => {
  let component: DocAsignadosComponent;
  let fixture: ComponentFixture<DocAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAsignadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
