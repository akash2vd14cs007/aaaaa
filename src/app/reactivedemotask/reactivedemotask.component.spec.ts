import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedemotaskComponent } from './reactivedemotask.component';

describe('ReactivedemotaskComponent', () => {
  let component: ReactivedemotaskComponent;
  let fixture: ComponentFixture<ReactivedemotaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivedemotaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivedemotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
