import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaLibComponent } from './minha-lib.component';

describe('MinhaLibComponent', () => {
  let component: MinhaLibComponent;
  let fixture: ComponentFixture<MinhaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
