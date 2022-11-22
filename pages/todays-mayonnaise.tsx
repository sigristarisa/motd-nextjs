import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";

const todaysMayonnaise = () => {
  return (
    <div>
      <Header />
      <main>
        <MainTitle headerText={"Your Mayonnaise of the Day is..."} />
      </main>
    </div>
  );
};

export default todaysMayonnaise;
