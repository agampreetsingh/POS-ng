import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionpaneComponent } from './actionpane.component';

describe('ActionpaneComponent', () => {
  let component: ActionpaneComponent;
  let fixture: ComponentFixture<ActionpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
