# DataManipulationApp

## Regarding the design decisions

### Library choices

[Angular ESLint](https://github.com/angular-eslint/angular-eslint) is used because a default linter is no longed included in Angular. The usage of the mentioned package is suggested because it contains all the necessary configurations and boileplate changes that need to be done.

[Prettier](https://prettier.io) was used so that code formatting is consistent and in line with the conventions used by the community.

[Jest](https://jestjs.io/) was used as I had previous experience with it and it is more performant than the defaults.

[AG Grid](https://www.ag-grid.com/) because it is a very versatile library with a plethora of features and a lot of resources.

[OpenLayers](https://openlayers.org/) is a very popular mapping library and was chosen due to that.

[Angular Material](https://material.angular.io/) was selected because it provides an easy way to style your applications and a lot of components out of the box.

### Design

The main structure of the app contains a navigation bar on the top of the page and the rest of the components are displayed at the rest of the page.

No Grid system was used as the needs were minimal and wherever we needed some structure custom Flexbox rules were enough to provide the functionality.

The data in sensor_readings.json were transformed using a small node script as it was assumed that this kind of operation would normally happen on a Back-End system. Otherwise we could write similar code on the Front-End in the Resolver responsible for the readings so that the components can have valid json to work with.

At the Grid page we can see that the grid provides the required sorting and filtering of specific fields.  
Pagination was used so that the user does not need to scroll and at the same time it prevents issues from the amount of data that the browser has to handle in a signle page.

At the map page we display a map with the sensor pointers shown and the map zoomed at a rough center of the sensor locations.  
It was assumed that the sensors were static and that the location of each sensor will not change in the course of time.  
The calculation of the unique sensors takes place in `getLocations` function of the `MapService`. The performance of this function could be improved but no time was allocated in this as it was acceptable for this demo.  
The calculation of the center of the sensor locations was done by getting an average of the sensors latitude and longitude. This may not be accurate as multiple sensors in an area can drag the center too much towards them but no time was allocated in finding a solution for this(probably we could take into account the proximity of each sensor to the others).

The Graph page is disabled as there was no time for its implementation. Charts.js/D3.js could be used as an easy solution.

The already generated tests were adjusted to pass with the changes of the code and but no new tests were created.
A test fails in the map component, probably due to a type error in the OpenLayers library but no solution was found as the time spent there was already too much(>30 mins).  
Cypress could be used to generate some e2e tests if there was more time for their implementation.

The app is responsive judging by quick manual testing that was performed.

## How to run the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests.
