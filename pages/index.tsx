import { useState } from "react";
import Header from "../components/Header/Header";

export default function Home() {
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  return (
    <div>
      <Header setHeaderText={setHeaderText} />
      <p>{headerText}</p>
    </div>
  );
}
