import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalancinPage } from './balancin.page';

describe('BalancinPage', () => {
  let component: BalancinPage;
  let fixture: ComponentFixture<BalancinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
