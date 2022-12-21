import { Image, Skeleton } from "@chakra-ui/react";
import { useImageLoaded } from "../hooks/useImageLoaded";

type Props = {
  src: string;
};

export const ProgressiveImage = ({ src }: Props) => {
  const { imageLoaded } = useImageLoaded(src);
  if (imageLoaded) {
    return <Image src={src} w="200px" h="200px" />;
  }

  return <Skeleton w="200px" h="200px" />;
};
