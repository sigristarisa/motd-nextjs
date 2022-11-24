// for client
export type NavItem = {
  id: number;
  navigate: string;
  navContent: string;
};

export type Dish = {
  id: number;
  name: string;
  image: string;
};

export type Combination = {
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

// for seeding
export type MayonnaiseSeed = {
  name: string;
  ingredient: string;
  portion: string;
};

export type DishSeed = {
  name: string;
  image: string;
};

export type CombinationSeed = {
  mayonnaiseId: number;
  dishId: number;
};

// for API
export type Data = {
  name: string;
};
