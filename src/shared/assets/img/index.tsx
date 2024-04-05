import { Image, ImageProps } from "@chakra-ui/react";
import BeeMoney from "./bee-money-art.jpg";
import GeometricShapes from "./geometric-shapes.jpeg";

export const Images = {
  "bee-money": BeeMoney,
  "geometric-shapes": GeometricShapes,
};

export const ImgIcon = ({
  image,
  iconColor,
  ...rest
}: {
  image: keyof typeof Images;
  iconColor?: string;
} & ImageProps) => {
  const imageSrc = Images[image];

  return <Image {...rest} src={imageSrc} alt={image} />;
};
