import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeEditComponent } from './make-edit.component';

describe('MakeEditComponent', () => {
  let component: MakeEditComponent;
  let fixture: ComponentFixture<MakeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
