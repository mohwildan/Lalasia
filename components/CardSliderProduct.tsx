import { Box, Heading, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface PropsCardSliderProduct {
  img: StaticImageData;
  badge: string;
  title: string;
  children: ReactNode;
  price: string;
}

const CardSliderProduct: FC<PropsCardSliderProduct> = ({
  img,
  badge,
  title,
  children,
  price,
}) => {
  return (
    <Box h="500px">
      <Image src={img} alt={`image ${title}`} />
      <Heading as="h6" variant="H5" color="paragraph-color" mt={4}>
        {badge}
      </Heading>
      <Heading color="text-color" variant={{ base: "H4", md: "H3+" }} mt={4}>
        {title}
      </Heading>
      <Text color="paragraph-color" variant="P3" mt={2}>
        {children}
      </Text>
      <Heading as="h6" variant={{ base: "H4", md: "H3" }} mt={4}>
        {price}
      </Heading>
    </Box>
  );
};

export default CardSliderProduct;
