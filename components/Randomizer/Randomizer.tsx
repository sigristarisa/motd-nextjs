import { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import ImageSlideShow from "../ImageSlideShow/ImageSlideShow";
import Ingredients from "../Ingredients/Ingredients";
import GoesWellWith from "../GoesWellWith/GoesWellWith";
import Image from "next/image";
import { Mayonnaise } from "../../helpers/types";
import styles from "./Randomizer.module.css";

const Randomizer = () => {
  const getRandomMayoId = (): number => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );
    return randomMayoId;
  };
  const [mayonnaise, setMayonnaise] = useState<Mayonnaise>();
  const [showMayonnaise, setShowMayonnaise] = useState<boolean>(false);

  const getMayonnaiseData = (): void => {
    fetch(`/api/mayonnaise/${getRandomMayoId()}`)
      .then((res) => res.json())
      .then((data) => setMayonnaise(data.data));
  };

  useEffect(() => {
    getMayonnaiseData();
    setTimeout(() => setShowMayonnaise(true), 3200);
  }, []);

  return (
    <div className={`${styles.randomizer_container} place-items_center`}>
      {mayonnaise && showMayonnaise ? (
        <Image
          src={`/mayo-image/image_mayonnaise${mayonnaise.id}.png`}
          width={240}
          height={240}
          alt={`${mayonnaise.name}`}
          className='place-items_center'
        />
      ) : (
        <ImageSlideShow />
      )}

      {mayonnaise && showMayonnaise ? (
        <div
          className={`${styles.mayonnaiseText_container} four-grid-columns_custom place-items_center`}
        >
          <h2 className='place-items_center'>
            {mayonnaise.name.toUpperCase()}
          </h2>
          <div>
            <Image
              src='/images/spoon.png'
              width={16}
              height={50}
              alt='spoon icon'
            />
          </div>
          <Ingredients mayonnaise={mayonnaise} />
          <GoesWellWith mayonnaise={mayonnaise} />
        </div>
      ) : (
        <div className={styles.spacing_container}></div>
      )}
    </div>
  );
};

export default Randomizer;
