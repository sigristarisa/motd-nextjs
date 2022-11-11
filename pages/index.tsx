import { useState } from "react";
import Header from "../components/Header/Header";

export default function Home() {
  const [navId, setNavId] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  const getNavId = (btnId: number): void => setNavId(btnId);
  const activateNav = (index: number): string => {
    return navId === index ? "active" : "inactive";
  };

  return (
    <div>
      <Header
        setHeaderText={setHeaderText}
        getNavId={getNavId}
        // activateNav={activateNav}
      />
      <p>{headerText}</p>
    </div>
  );
}
