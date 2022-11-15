import { useState, useContext } from "react";
import { headerContext } from "../../helpers/createContext";
import { useRouter } from "next/router";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Lid.module.css";

const Lid = () => {
  const { setHeaderText, getNavId } = useContext(headerContext);

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const moveToRandomizer = (): void => {
    setIsClicked(false);
    getNavId(2);
    setHeaderText("Your Mayonnaise Of The Day Is...");
    router.push("/todays-mayonnaise");
  };
  return (
    <div className={`${styles.lid_container} align-items_end`}>
      {isClicked && (
        <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
          <button
            className={styles.lid_youSure_btn}
            onClick={() => moveToRandomizer()}
          >
            You sure? <br></br>It&apos;s only once a day
          </button>
        </OutsideClickHandler>
      )}
      <button
        className={styles.lid_mixMyDay_btn}
        onClick={() => setIsClicked(!isClicked)}
      >
        Mix My Day!
      </button>
      <Image
        src='/images/mayonnaise-lid.png'
        width={900}
        height={300}
        alt='mayonnaise lid'
      />
    </div>
  );
};

export default Lid;
