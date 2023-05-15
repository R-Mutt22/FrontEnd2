import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionEditableComponent } from './formacion-editable.component';

describe('FormacionEditableComponent', () => {
  let component: FormacionEditableComponent;
  let fixture: ComponentFixture<FormacionEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
