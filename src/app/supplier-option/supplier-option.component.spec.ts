import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOptionComponent } from './supplier-option.component';

describe('SupplierOptionComponent', () => {
  let component: SupplierOptionComponent;
  let fixture: ComponentFixture<SupplierOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
