import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaquinaPage } from './maquina.page';

describe('MaquinaPage', () => {
  let component: MaquinaPage;
  let fixture: ComponentFixture<MaquinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
