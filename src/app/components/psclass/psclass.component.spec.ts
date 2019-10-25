import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsclassComponent } from './psclass.component';

describe('PsclassComponent', () => {
  let component: PsclassComponent;
  let fixture: ComponentFixture<PsclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
