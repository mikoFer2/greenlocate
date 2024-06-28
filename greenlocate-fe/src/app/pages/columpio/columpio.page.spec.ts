import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumpioPage } from './columpio.page';

describe('ColumpioPage', () => {
  let component: ColumpioPage;
  let fixture: ComponentFixture<ColumpioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumpioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
