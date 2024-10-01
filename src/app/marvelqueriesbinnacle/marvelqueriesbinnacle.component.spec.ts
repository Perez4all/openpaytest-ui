import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelQueriesBinnacleComponent } from './marvelqueriesbinnacle.component';

describe('MarvelqueriesbinnacleComponent', () => {
  let component: MarvelQueriesBinnacleComponent;
  let fixture: ComponentFixture<MarvelQueriesBinnacleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelQueriesBinnacleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelQueriesBinnacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
