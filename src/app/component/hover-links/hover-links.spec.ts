import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverLinks } from './hover-links';

describe('HoverLinks', () => {
  let component: HoverLinks;
  let fixture: ComponentFixture<HoverLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
