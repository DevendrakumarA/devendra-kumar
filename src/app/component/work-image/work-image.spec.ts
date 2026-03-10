import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkImage } from './work-image';

describe('WorkImage', () => {
  let component: WorkImage;
  let fixture: ComponentFixture<WorkImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
