import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReturnComponent } from './update-return.component';

describe('UpdateReturnComponent', () => {
  let component: UpdateReturnComponent;
  let fixture: ComponentFixture<UpdateReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
