import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoComponent } from './edit-sto.component';

describe('EditStoComponent', () => {
  let component: EditStoComponent;
  let fixture: ComponentFixture<EditStoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
