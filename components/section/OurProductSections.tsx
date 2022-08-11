import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import ImageLeftProductSections from "../../public/image/main/unsplash_mpN7xjKQ_Ns.png";
import ImageRightProductSections from "../../public/image/main/unsplash_376KN_ISplE.png";
import ProductCount from "../ProductCount";

const OurProductSections: FC = () => {
  return (
    <Flex mt="5rem" gap={8} flexDir={{ base: "column", md: "row" }}>
      <Flex flexDir="column" flex={1}>
        <Heading
          as="h4"
          variant={{ base: "H6+", md: "H5" }}
          color="secondary-color"
        >
          Our Product
        </Heading>
        <Heading as="h2" variant={{ base: "H3", md: "H2" }} mt={1}>
          Crafted by talented and high quality material
        </Heading>
        <Text variant={{ base: "P1", md: "P3" }} mt="1.4rem">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient. morbi
          fermentum, vivamus et accumsan dui tincidunt pulvinar
        </Text>
        <Button variant="primary" my={6} alignSelf="flex-start">
          Learn More
        </Button>
        <Box display={{ base: "box", md: "none" }} my="1.5rem">
          <ProductCount />
        </Box>
        <Image src={ImageLeftProductSections} alt="image product" />
      </Flex>
      <Flex flex={1} flexDir="column">
        <Box display={{ base: "none", md: "block" }} mb="2rem">
          <ProductCount />
        </Box>
        <Image src={ImageRightProductSections} alt="Image Right" />
      </Flex>
    </Flex>
  );
};

export default OurProductSections;
