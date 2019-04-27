import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAnalystComponent } from './root-analyst.component';

describe('RootAnalystComponent', () => {
  let component: RootAnalystComponent;
  let fixture: ComponentFixture<RootAnalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootAnalystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
