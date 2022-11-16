import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Lid from "../components/Lid/Lid";
import { headerContext } from "../helpers/createContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [navId, setNavId] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  const getNavId = (btnId: number): void => setNavId(btnId);
  const activateNav = (index: number): boolean => {
    console.log("navId", navId);
    console.log("index", index);
    console.log(navId === index);
    return navId === index;
  };

  return (
    <headerContext.Provider
      value={{ headerText, setHeaderText, getNavId, activateNav }}
    >
      <div className='justify-items_center'>
        <Head>
          <title>MOTD – Mayonnaise of the Day</title>
        </Head>
        <Header />
        <main className={`${styles.main_container} place-items_center`}>
          <MainTitle headerText={headerText} />
          <Lid />
        </main>
      </div>
    </headerContext.Provider>
  );
}
