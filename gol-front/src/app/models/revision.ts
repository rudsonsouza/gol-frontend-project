export interface Revision {
  km: number;
  valorDaRevisao: number;
  data: Date;
}

export class RevisionClass {
  constructor(
    public km: number,
    public valorDaRevisao: number,
    public data: Date
  ) { }
}
