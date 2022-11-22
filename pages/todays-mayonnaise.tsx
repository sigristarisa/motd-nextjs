import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Randomizer from "../components/Randomizer/Randomizer";

const todaysMayonnaise = () => {
  return (
    <div>
      <Header />
      <main>
        <MainTitle headerText={"Your Mayonnaise of the Day is..."} />
        <Randomizer />
      </main>
    </div>
  );
};

export default todaysMayonnaise;
