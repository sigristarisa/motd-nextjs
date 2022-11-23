import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Lid from "../components/Lid/Lid";
import { headerContext } from "../helpers/createContext";

const Home = () => {
  const [navId, setNavId] = useState<number>(0);

  const getNavId = (btnId: number): void => setNavId(btnId);
  const activateNav = (index: number): boolean => navId === index;

  return (
    <Layout page=''>
      <headerContext.Provider value={{ getNavId, activateNav }}>
        <Lid />
      </headerContext.Provider>
    </Layout>
  );
};

export default Home;
