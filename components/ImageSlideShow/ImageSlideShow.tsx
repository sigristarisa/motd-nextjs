import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlideShow = () => {
  const [mayoImgId, setMayoImgId] = useState<number>(1);

  const getRandomMayoImgId = (): void => {
    const maxMayoId = 100;
    const minMayoId = 1;
    const randomMayoId: number = Math.floor(
      Math.random() * (maxMayoId - minMayoId) + minMayoId
    );
    setMayoImgId(randomMayoId);
  };

  useEffect(() => {
    const randomizeMayoImgId: ReturnType<typeof setInterval> = setInterval(
      getRandomMayoImgId,
      100
    );
    setTimeout(() => clearInterval(randomizeMayoImgId), 3500);
  }, []);

  return (
    <div className='place-items_center'>
      <Image
        src={`/mayo-image/image_mayonnaise${mayoImgId}.png`}
        width={240}
        height={240}
        alt='mayo img'
      />
    </div>
  );
};

export default ImageSlideShow;
