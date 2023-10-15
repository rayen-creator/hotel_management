export enum ItemCategory {
  LINENS = 'LINENS',
  TOILETRIES = 'TOILETRIES',
  CLEANING_SUPPLIES = 'CLEANING_SUPPLIES',
  FOOD = 'FOOD',
  OTHER = 'OTHER'
}

export interface Item {
  id?: number;
  name: string;
  category: ItemCategory;
  quantity: number;
  image: string;
}
