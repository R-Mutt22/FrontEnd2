import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFormacionComponent } from './nueva-formacion.component';

describe('NuevaFormacionComponent', () => {
  let component: NuevaFormacionComponent;
  let fixture: ComponentFixture<NuevaFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
