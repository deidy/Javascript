/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoderComponent } from './poder.component';

describe('PoderComponent', () => {
  let component: PoderComponent;
  let fixture: ComponentFixture<PoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
