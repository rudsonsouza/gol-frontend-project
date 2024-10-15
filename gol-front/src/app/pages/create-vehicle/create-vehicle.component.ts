import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import {Revision, RevisionClass} from '../../models/revision';
import {VehicleService} from '../../services/vehicle.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    MatCard,
    MatFormField,
    MatInput,
    MatCardContent,
    MatFormFieldModule,
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterLink
  ],
  templateUrl: './create-vehicle.component.html',
  styleUrl: './create-vehicle.component.scss'
})
export class CreateVehicleComponent implements OnInit {
  vehicle: Vehicle = {
    id: 0,
    placa: '',
    modelo: '',
    ano: 0,
    cor: '',
    revisoes: []
  }

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createVehicle() {
    this.service.create(this.vehicle).subscribe(() => { })
  }

  cancelar() {
    this.router.navigate(['/'])
  }

  addRevision() {
    this.vehicle.revisoes.push(new RevisionClass(0, 0, new Date()));
  }

  removeRevisao(index: number) {
    this.vehicle.revisoes.splice(index, 1); // Removendo uma revisão
  }
}
