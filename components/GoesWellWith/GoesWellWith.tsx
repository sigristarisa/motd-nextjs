import Image from "next/image";
import { Mayonnaise } from "../../helpers/types";
import styles from "./GoesWellWith.module.css";

interface Props {
  mayonnaise: Mayonnaise;
}

const GoesWellWith = ({ mayonnaise }: Props) => {
  return (
    <div
      className={`${styles.goesWellWith_container} two-grid-columns_expand-two justify-items_start`}
    >
      <p>Goes well with</p>
      <ul className={`seven-grid-columns ${styles.icon_container}`}>
        {mayonnaise.combination.map((combination, index) => {
          return (
            <li key={index} className={styles.dishIcon_container}>
              <Image
                src={`/dish-image/${combination.dish.name}.png`}
                width={40}
                height={40}
                alt={`${combination.dish.name} icon`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GoesWellWith;
