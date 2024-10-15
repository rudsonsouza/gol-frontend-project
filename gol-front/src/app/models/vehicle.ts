import {Revision} from './revision';

export interface Vehicle {
  id?: number;
  placa: string;
  modelo: string;
  ano: number;
  cor: string;
  revisoes: Revision[];
}
