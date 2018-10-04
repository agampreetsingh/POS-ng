import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpaneComponent } from './productpane.component';

describe('ProductpaneComponent', () => {
  let component: ProductpaneComponent;
  let fixture: ComponentFixture<ProductpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
