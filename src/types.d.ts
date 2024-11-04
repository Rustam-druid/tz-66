export interface IFoodApp {
  id:string;
  category:string;
  calories:number;
  description:string;
}
export interface IFoodAppMutation {
  calories:number;
  category:string;
  description:string;
}


export type ApiFood = Omit<IPagesAppMutation , 'id'>

export interface ApiFoodCategory {
  [id: string]: IFoodApp;
}

