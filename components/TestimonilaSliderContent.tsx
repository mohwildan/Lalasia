import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import ImageQuote from "../public/image/quote-up.png"
import ImageStar from "../public/image/star.png"



interface TestimonilaSliderContentProps {
  children: ReactNode;
  name: string;
  userImg: StaticImageData;
  numberStar: string;
};

const TestimonilaSliderContent: FC<TestimonilaSliderContentProps> = ({ children, userImg, name, numberStar }) => {
  return (
    <Box>
      <Image src={ImageQuote} alt="quote" />
      <Text variant={{ base: "P1", md: "P3" }} mt={4}>{children}</Text>
      <Flex justify="space-between" mt={4}>
        <Flex align="center" gap={3}>
          <Image src={userImg} alt={`profile ${name}`} />
          <Heading as="h4" variant={{ base: "H6+", md: "H4" }}>{name}</Heading>
        </Flex>
        <Flex align="center" gap={3}>
          <Image src={ImageStar} alt="Star img" />
          <Heading as="h6" variant={{ base: "H6+", md: "H6" }}>{numberStar}</Heading>
        </Flex>
      </Flex>
    </Box>
  );
};


export default TestimonilaSliderContent;
