import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBLExportComponent } from './hblexport.component';

describe('HBLExportComponent', () => {
  let component: HBLExportComponent;
  let fixture: ComponentFixture<HBLExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBLExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBLExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
