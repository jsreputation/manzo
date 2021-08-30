import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSTOComponent } from './config-sto.component';

describe('ConfigSTOComponent', () => {
  let component: ConfigSTOComponent;
  let fixture: ComponentFixture<ConfigSTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSTOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
