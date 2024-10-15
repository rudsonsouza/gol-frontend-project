import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {VehicleService} from '../../services/vehicle.service';
import {catchError, Observable, of, tap} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {VehiclePagination} from '../../models/vehicle-pagination';
import {ErrorDialogComponent} from '../../common/error-dialog/error-dialog.component';
import {AsyncPipe} from '@angular/common';
import {VehicleComponent} from '../vehicle/vehicle.component';
import {Vehicle} from '../../models/vehicle';
import {RouterLink} from '@angular/router';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardHeader} from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-list-vehicle',
  standalone: true,
  imports: [
    AsyncPipe,
    VehicleComponent,
    NgIf,
    NgFor,
    RouterLink,
    MatTable,
    MatPaginator,
    FormsModule,
    MatCardModule,
    MatCardHeader,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatButton,
    MatTooltip,
    MatAnchor
  ],
  templateUrl: './list-vehicle.component.html',
  styleUrl: './list-vehicle.component.scss'
})
export class ListVehicleComponent implements OnInit {
  @Input() vehicles: Vehicle[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  displayedColumns: string[] = ['placa', 'modelo', 'ano', 'cor', 'action'];
  filter = {
    placa: '',
    modelo: '',
    ano: null,
    cor: ''
  };

  dataSource = new MatTableDataSource(this.filteredVeiculos());

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  filteredVeiculos() {
    return this.vehicles.filter(veiculo => {
      return (
        (this.filter.placa ? veiculo.placa.toLowerCase().includes(this.filter.placa.toLowerCase()) : true) &&
        (this.filter.modelo ? veiculo.modelo.toLowerCase().includes(this.filter.modelo.toLowerCase()) : true) &&
        (this.filter.ano ? veiculo.ano === this.filter.ano : true) &&
        (this.filter.cor ? veiculo.cor.toLowerCase().includes(this.filter.cor.toLowerCase()) : true)
      );
    });
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

