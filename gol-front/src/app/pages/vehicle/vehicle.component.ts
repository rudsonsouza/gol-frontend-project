import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../models/vehicle';
import {RouterLink} from '@angular/router';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    MatTooltip,
    MatButton
  ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent implements OnInit {
    @Input() vehicle: Vehicle = {
      id: 0,
      placa: 'AAA-123',
      modelo: 'GLA',
      ano: 2018,
      cor: 'cinza',
      revisoes: [{
        km: 10000,
        valorDaRevisao: 34.5,
        data: new Date('2024-10-13')
      }]
    };
    ngOnInit(): void { }
}
