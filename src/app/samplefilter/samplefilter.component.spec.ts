import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplefilterComponent } from './samplefilter.component';

describe('SamplefilterComponent', () => {
  let component: SamplefilterComponent;
  let fixture: ComponentFixture<SamplefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplefilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
