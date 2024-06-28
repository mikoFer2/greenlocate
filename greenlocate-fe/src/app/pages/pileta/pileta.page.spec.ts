import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiletaPage } from './pileta.page';

describe('PiletaPage', () => {
  let component: PiletaPage;
  let fixture: ComponentFixture<PiletaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
