import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootConsumerComponent } from './root-consumer.component';

describe('RootConsumerComponent', () => {
  let component: RootConsumerComponent;
  let fixture: ComponentFixture<RootConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
