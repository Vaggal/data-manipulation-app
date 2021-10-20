import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ReadingsResolver } from './readings.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
    resolve: {
      readings: ReadingsResolver,
    },
  },
  {
    path: 'map',
    component: MapComponent,
    resolve: {
      readings: ReadingsResolver,
    },
  },
  {
    path: 'graph',
    component: GraphComponent,
    resolve: {
      readings: ReadingsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
