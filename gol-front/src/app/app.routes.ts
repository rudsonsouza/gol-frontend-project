import { Routes } from '@angular/router';
import {VehiclesComponent} from './pages/vehicles/vehicles.component';
import {EditVehicleComponent} from './pages/edit-vehicle/edit-vehicle.component';
import {CreateVehicleComponent} from './pages/create-vehicle/create-vehicle.component';
import {DeleteVehicleComponent} from './pages/delete-vehicle/delete-vehicle.component';

export const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent
  },
  {
    path: 'vehicles/editVehicle/:id',
    component: EditVehicleComponent
  },
  {
    path: 'vehicles/deleteVehicle/:id',
    component: DeleteVehicleComponent
  },
  {
    path: 'vehicles/createVehicle',
    component: CreateVehicleComponent
  }
];
