import { useEffect, useState } from "react";

export const useImageLoaded = (src: string) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setImageLoaded(true);
  }, []);

  return {
    imageLoaded,
  };
};
