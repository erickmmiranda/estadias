import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDocumentComponent } from './menu-document.component';

describe('MenuDocumentComponent', () => {
  let component: MenuDocumentComponent;
  let fixture: ComponentFixture<MenuDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
