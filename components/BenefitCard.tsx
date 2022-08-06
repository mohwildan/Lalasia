import { Box, Heading, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface BenefitCardProps {
  img: StaticImageData;
  title: string;
  children: ReactNode;
}

const BenefitCard: FC<BenefitCardProps> = ({ img, title, children }) => {
  return (
    <Box
      flex={1}
      bg="screen-color"
      boxShadow="0px 4px 100px rgba(175, 173, 181, 0.1)"
      p={4}
    >
      <Image src={img} />
      <Heading as="h5" mt={4} variant={{ base: "H6", md: "H3" }}>
        {title}
      </Heading>
      <Text mt={4} variant={{ base: "P1", md: "P3" }}>
        {children}
      </Text>
    </Box>
  );
};

export default BenefitCard;
