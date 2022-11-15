import { createContext } from "react";
import { HeaderText } from "./types";

export const headerContext = createContext<HeaderText>({
  headerText: "Mayonnaise Of The Day",
  setHeaderText: () => {},
  getNavId: () => {},
  activateNav: () => false,
});

export const raisedBedContext = createContext({});
