export type NavItem = {
  id: number;
  navigate: string;
  navContent: string;
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

export type HeaderText = {
  headerText: string;
  setHeaderText: (headerText: string) => void;
  getNavId: (navId: number) => void;
  activateNav: (navId: number) => boolean;
};
