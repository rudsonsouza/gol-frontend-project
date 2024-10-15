import {Component, OnInit} from '@angular/core';
import {catchError, Observable, of, tap} from 'rxjs';
import {VehiclePagination} from '../../models/vehicle-pagination';
import {VehicleService} from '../../services/vehicle.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {ErrorDialogComponent} from '../../common/error-dialog/error-dialog.component';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ListVehicleComponent} from '../list-vehicle/list-vehicle.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    AsyncPipe,
    MatProgressSpinner,
    ListVehicleComponent
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements OnInit {

  vehicles$: Observable<VehiclePagination> | null = null;

  constructor(private service: VehicleService,
              public dialog: MatDialog) { }

  pageIndex = 1;
  pageSize = 10;

  ngOnInit() {
    this.refresh()
  }

  refresh(pageEvent: PageEvent = { length: 0, pageIndex: 1, pageSize: 10 }) {
    this.vehicles$ = this.service.list(pageEvent.pageIndex, pageEvent.pageSize)
      .pipe(
        tap(() => {
          this.pageIndex = pageEvent.pageIndex;
          this.pageSize = pageEvent.pageSize;
        }),
        catchError(error => {
          this.onError('Erro ao carregar veículos.');
          return of({ vehicles: [], totalRecords: 0, totalPages: 0 })
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
