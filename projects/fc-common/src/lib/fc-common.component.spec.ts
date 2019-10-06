import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcCommonComponent } from './fc-common.component';

describe('FcCommonComponent', () => {
  let component: FcCommonComponent;
  let fixture: ComponentFixture<FcCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
