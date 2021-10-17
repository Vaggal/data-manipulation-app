import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ReadingsResolver } from './readings.resolver';

const routes: Routes = [
  {
    path: 'grid',
    component: GridComponent,
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
