import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionFeedComponent } from './exhibition-feed.component';

describe('ExhibitionFeedComponent', () => {
  let component: ExhibitionFeedComponent;
  let fixture: ComponentFixture<ExhibitionFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
