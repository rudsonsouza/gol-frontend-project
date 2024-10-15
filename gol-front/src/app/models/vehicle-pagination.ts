import { Vehicle } from './vehicle';

export interface VehiclePagination {
  vehicles: Vehicle[];
  totalRecords: number;
  totalPages: number;
}
