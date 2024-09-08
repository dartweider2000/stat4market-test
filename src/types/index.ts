export interface IRest {
  rest: number;
  canModify: boolean;
}
export interface IRestAndHas {
  value: IRest;
  days: number;
}

export interface IMeasureTableRow {
  id: number;
  size: number;
  wbRest: IRestAndHas;
  providedRest: IRestAndHas;
  storageRest: IRestAndHas;
  allRest: IRestAndHas;
  inRoad: IRest;
  orderSpeed: number;
  viewTo: string;
}

export interface IMainTableRow {
  id: number;
  product: {
    image: string;
    name: string;
    article: number;
  };
  wbRest: IRestAndHas;
  providerRest: IRestAndHas;
  storageRest: IRestAndHas;
  allRest: IRestAndHas;
  inRoad: IRest;
  orderSpeed: IRest;
  viewTo: string;
  measureTable?: IMeasureTableRow[];
}
