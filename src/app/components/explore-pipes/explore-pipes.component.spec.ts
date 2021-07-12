import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePipesComponent } from './explore-pipes.component';

describe('ExplorePipesComponent', () => {
  let component: ExplorePipesComponent;
  let fixture: ComponentFixture<ExplorePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
