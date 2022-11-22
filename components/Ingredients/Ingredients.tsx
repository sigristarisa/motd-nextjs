import { Mayonnaise } from "../../helpers/types";
import styles from "./Ingredients.module.css";
interface Props {
  mayonnaise: Mayonnaise;
}

const Ingredients = ({ mayonnaise }: Props) => {
  return (
    <div className={`${styles.ingredients_container} justify-items_start`}>
      <p>2 tbsp. mayonnaise</p>
      <p>
        {mayonnaise.portion} {mayonnaise.ingredient}
      </p>
    </div>
  );
};

export default Ingredients;
