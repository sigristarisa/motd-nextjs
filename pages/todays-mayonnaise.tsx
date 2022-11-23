import Layout from "../components/Layout/Layout";
import Randomizer from "../components/Randomizer/Randomizer";

const todaysMayonnaise = () => {
  return (
    <Layout page='todays-mayonnaise'>
      <Randomizer />
    </Layout>
  );
};

export default todaysMayonnaise;
