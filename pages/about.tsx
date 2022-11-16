import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Header />
      <main className={`${styles.about_container} place-items_center`}>
        <MainTitle
          headerText={
            "By the Mayo-Lover, For the Mayo-Lover, Of the Mayo-Lover"
          }
        />
        <div className={`${styles.about_text_container}`}>
          <p>
            You might go along with a little bit of mayonnaise on toast,
            <br></br> but are you ready for mayonnaise on your rice,<br></br>{" "}
            your steamed vegetables, your potato chips?
          </p>
          <p>
            To expand the potential of mayonnaise,<br></br> MOTD will select
            your mayonnaise of the day – out of 100 variations!
          </p>

          <p>
            But be careful – you can only get one mayonnaise per day<br></br> to
            prevent your mayo-addiction.
          </p>
        </div>
        <div className={`${styles.creator_text_container} align-items_end`}>
          <p>
            creator: <a href='https://github.com/sigristarisa'>Arisa Sigrist</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
