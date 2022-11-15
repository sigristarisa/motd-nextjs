import { useState } from "react";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [navId, setNavId] = useState<number>(0);
  const [headerText, setHeaderText] = useState<string>("Mayonnaise Of The Day");

  const getNavId = (btnId: number): void => setNavId(btnId);
  const activateNav = (index: number): boolean => {
    return navId === index;
  };

  console.log(navId);

  return (
    <div className='justify-items_center'>
      <Head>
        <title>MOTD – Mayonnaise of the Day</title>
      </Head>
      <Header
        setHeaderText={setHeaderText}
        getNavId={getNavId}
        activateNav={activateNav}
      />
      <MainTitle headerText={headerText} />
      <Image
        src='/images/mayonnaise-lid.png'
        width={900}
        height={300}
        alt='mayonnaise lid'
      />
    </div>
  );
}
