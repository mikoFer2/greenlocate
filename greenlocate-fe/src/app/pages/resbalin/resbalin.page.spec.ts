import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResbalinPage } from './resbalin.page';

describe('ResbalinPage', () => {
  let component: ResbalinPage;
  let fixture: ComponentFixture<ResbalinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResbalinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
