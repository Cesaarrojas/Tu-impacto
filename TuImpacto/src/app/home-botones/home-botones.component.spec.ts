import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBotonesComponent } from './home-botones.component';

describe('HomeBotonesComponent', () => {
  let component: HomeBotonesComponent;
  let fixture: ComponentFixture<HomeBotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
