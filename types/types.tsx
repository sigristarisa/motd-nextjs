export type NavBtn = {
  id: number;
  navigate: string;
  btnContent: string;
  headerText: string | null;
};

type Dish = {
  id: number;
  name: string;
  image: string;
};

type Combination = {
  id: number;
  mayonnaiseId: number;
  dishId: number;
  dish: Dish;
};

export type Mayonnaise = {
  id: number;
  name: string;
  ingredient: string;
  portion: string;
  combination: Combination[];
};
