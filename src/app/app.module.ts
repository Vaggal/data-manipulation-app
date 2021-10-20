import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { MapService } from './map/map.service';
import { MaterialModule } from './material.module';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [AppComponent, GridComponent, NavigationComponent, MapComponent, HomeComponent, GraphComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, AgGridModule, BrowserAnimationsModule, MaterialModule],
  providers: [AgGridAngular, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
