export enum ItemCategory {
  LINENS = 'LINENS',
  TOILETRIES = 'TOILETRIES',
  CLEANING_SUPPLIES = 'CLEANING_SUPPLIES',
  FOOD = 'FOOD',
  OTHER = 'OTHER'
}
export enum ItemUnit {
  PIECE = 'PIECE',
  GRAM = 'GRAM',
  LITER = 'LITER',
  PACK = 'PACK',
  SET = 'SET'
}

export interface Item {
  id?: number;
  name: string;
  category: ItemCategory;
  quantity: number;
  image: string;
  unit:ItemUnit;
}
