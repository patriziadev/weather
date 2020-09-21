import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPreviewComponent } from './previous-preview.component';

describe('PreviousPreviewComponent', () => {
  let component: PreviousPreviewComponent;
  let fixture: ComponentFixture<PreviousPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
