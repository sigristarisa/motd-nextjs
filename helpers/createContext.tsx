import { createContext } from "react";
import { HeaderText } from "./types";

export const headerContext = createContext<HeaderText>({
  getNavId: () => {},
  activateNav: () => false,
});
