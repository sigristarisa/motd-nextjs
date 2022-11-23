import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Lid from "../components/Lid/Lid";
import { headerContext } from "../helpers/createContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [navId, setNavId] = useState<number>(0);

  const getNavId = (btnId: number): void => setNavId(btnId);
  const activateNav = (index: number): boolean => navId === index;

  return (
    <Layout page='home'>
      <headerContext.Provider value={{ getNavId, activateNav }}>
        <Lid />
      </headerContext.Provider>
    </Layout>
  );
}
