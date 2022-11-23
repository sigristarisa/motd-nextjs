import Head from "next/head";
import Header from "../Header/Header";
import MainTitle from "../MainTitle/MainTitle";

interface Children {
  children: JSX.Element;
  page: string;
}

const Layout = ({ children, page }: Children) => {
  const setHeaderText = (page: string): string => {
    switch (page) {
      case "home":
        return "Mayonnaise of the Day";
      case "about":
        return "By the Mayo-Lover, For the Mayo-Lover, Of the Mayo-Lover";
      case "todays-mayonnaise":
        return "Your mayonnaise of the day is...";
      default:
        "Mayonnaise of the Day";
    }
    return "";
  };

  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Get your mayonnaise of the day!' />
      </Head>
      <Header />
      <main className='justify-items_center'>
        <MainTitle headerText={setHeaderText(page)} />
        {children}
      </main>
    </div>
  );
};
export default Layout;