import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSucursalComponent } from './crear-sucursal.component';

describe('CrearSucursalComponent', () => {
  let component: CreateSucursalComponent;
  let fixture: ComponentFixture<CreateSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
