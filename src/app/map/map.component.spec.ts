import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mapServiceStub: Partial<MapService>;

  beforeEach(async () => {
    mapServiceStub = {
      calculateCenter: (coords) => [0, 0],
      getLocations: (readings) => [[0, 0]],
    };

    await TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: MapService, useValue: mapServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the page heading', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const nameDisplay: HTMLElement = hostElement.querySelector('h2')!;

    expect(nameDisplay.textContent).toBe('Sensor Locations');
  });

  it('should contain the canvas element', () => {});
});
