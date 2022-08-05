import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import ImageArrow from "../../public/image/Sketch-annotation-element-stroke-line-arrow-spiral-down-5.svg";
import { RiSearch2Line } from "react-icons/ri";
import ImageHeroSection from "../../public/image/main/Rectangle 2.png";

const HeroSections: FC = () => {
  return (
    <Flex
      h="100vh"
      pt="9rem"
      justifyContent="center"
      align="center"
      position="relative"
    >
      <Box>
        <Box
          display="flex"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Box maxW={{ base: "100%", md: "55em" }}>
            <Heading variant={{ base: "H3+", sm: "H1", md: "H1" }}>
              Discover Furniture With High Quality Wood
            </Heading>
            <Text variant={{ base: "P1", md: "P3" }} mt="1.4rem">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </Text>
          </Box>
        </Box>
        <Box pos="relative" mt="5rem">
          <Image src={ImageHeroSection} />
          <Flex
            w={{ base: "100%", md: "50%" }}
            bg="screen-color"
            p="1rem"
            boxShadow="0px 4px 80px rgba(175, 173, 181, 1)"
            position={{ base: "static", md: "absolute" }}
            zIndex={10}
            top="-2.5rem"
            left="25%"
          >
            <InputGroup>
              <InputLeftElement
                pos="absolute"
                fontSize="2rem"
                children={<RiSearch2Line />}
                color="paragraph-color"
              />
              <Input
                type="text"
                variant="unstyled"
                placeholder="Search property"
                h="full"
                w="full"
                _placeholder={{ color: "paragraph-color" }}
              />
            </InputGroup>
            <Button variant="primary">Search</Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroSections;
