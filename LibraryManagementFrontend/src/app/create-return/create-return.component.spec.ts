import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReturnComponent } from './create-return.component';

describe('CreateReturnComponent', () => {
  let component: CreateReturnComponent;
  let fixture: ComponentFixture<CreateReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
