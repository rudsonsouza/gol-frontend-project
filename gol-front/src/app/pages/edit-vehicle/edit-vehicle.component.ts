import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RevisionClass} from '../../models/revision';
import {isPlatformBrowser, NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { NgxEditorModule, Editor, Toolbar } from 'ngx-editor';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabLabel} from '@angular/material/tabs';

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, NgIf, NgForOf, MatDatepickerToggle, MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatNativeDateModule, MatTabLabel],
  templateUrl: './edit-vehicle.component.html',
  styleUrl: './edit-vehicle.component.scss'
})
export class EditVehicleComponent implements OnInit {

  vehicle: Vehicle = {
    id: 0,
    placa: '',
    modelo: '',
    ano: 0,
    cor: '',
    revisoes: []
  }



  constructor(private service: VehicleService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.service.loadById(parseInt(id!)).subscribe((vehicle) => {
      this.vehicle = vehicle
    })
  }

  editVehicle() {
    this.service.edit(this.vehicle).subscribe(() => { })
  }

  cancelar() {
    this.router.navigate(['/'])
  }

  addRevision() {
    this.vehicle.revisoes.push(new RevisionClass(0, 0, new Date())); // Adicionando uma nova revisão
  }

  removeRevisao(index: number) {
    this.vehicle.revisoes.splice(index, 1);
  }
}
