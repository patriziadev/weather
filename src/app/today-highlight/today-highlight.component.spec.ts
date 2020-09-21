import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHighlightComponent } from './today-highlight.component';

describe('TodayHighlightComponent', () => {
  let component: TodayHighlightComponent;
  let fixture: ComponentFixture<TodayHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
