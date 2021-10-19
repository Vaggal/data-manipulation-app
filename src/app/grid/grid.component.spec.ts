import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { RouterTestingModule } from '@angular/router/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [RouterTestingModule, AgGridModule.withComponents([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the page heading', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameDisplay: HTMLElement = hostElement.querySelector('h2')!;

    expect(nameDisplay.textContent).toBe('Sensor Data');
  });
});
