import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstatusComponent } from './viewstatus.component';

describe('ViewstatusComponent', () => {
  let component: ViewstatusComponent;
  let fixture: ComponentFixture<ViewstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
