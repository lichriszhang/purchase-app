import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEquipComponent } from './cate-equip.component';

describe('CateEquipComponent', () => {
  let component: CateEquipComponent;
  let fixture: ComponentFixture<CateEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
