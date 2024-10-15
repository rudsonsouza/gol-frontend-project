import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VehiclePagination} from '../models/vehicle-pagination';
import {first, Observable} from 'rxjs';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly API = 'http://localhost:5094/api/vehicles';

  constructor(private httpClient: HttpClient) { }

  list(page = 1, pageSize = 10) {
    return this.httpClient.get<VehiclePagination>(this.API, { params: { page, pageSize }})
      .pipe(first());
  }

  loadById(id: number) {
    return this.httpClient.get<Vehicle>(`${this.API}/${id}`)
  }

  edit(record: Vehicle): Observable<Vehicle> {
    const url = `${this.API}/${record.id}`;

    return this.httpClient.put<Vehicle>(url, record)
  }

  create(record: Vehicle) {
    return this.httpClient.post<Vehicle>(this.API, record);
  }

  remove(id: number) {
    return this.httpClient.delete<Vehicle>(`${this.API}/${id}`).pipe(first());
  }

  /*
    private update(record: Partial<Vehicle>) {
      return this.httpClient.put<Vehicle>(`${this.API}/${record.id}`, record).pipe(first());
    }

   */
}
