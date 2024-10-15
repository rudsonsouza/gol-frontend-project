import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import {VehicleService} from '../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './delete-vehicle.component.html',
  styleUrl: './delete-vehicle.component.scss'
})
export class DeleteVehicleComponent implements OnInit {
  vehicle: Vehicle = {
    id: 0,
    placa: '',
    modelo: '',
    ano: 0,
    cor: '',
    revisoes: []
  }

  constructor(private service: VehicleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.loadById(parseInt(id!)).subscribe((vehicle) => {
      this.vehicle = vehicle
    })
  }

  deleteVehicle() {
    if(this.vehicle.id) {
      this.service.remove(this.vehicle.id).subscribe(() => { })
    }
  }

  cancelar(){
    this.router.navigate(['/'])
  }
}
