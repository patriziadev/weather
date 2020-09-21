import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPreviewComponent } from './today-preview.component';

describe('TodayPreviewComponent', () => {
  let component: TodayPreviewComponent;
  let fixture: ComponentFixture<TodayPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
