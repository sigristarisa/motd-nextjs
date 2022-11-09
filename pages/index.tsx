import { useState } from "react";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  return (
    <div className={styles.container}>
      <Header headerText={headerText} setHeaderText={setHeaderText} />
    </div>
  );
}
