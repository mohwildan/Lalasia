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
          <Box maxW={{ base: "100%", sm: "100%", md: "55em" }}>
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
          <Flex
            w={{ base: "100%", md: "50%" }}
            bg="screen-color"
            p="1rem"
            boxShadow="0px 4px 80px rgba(175, 173, 181, 0.4)"
            position={{ base: "static", md: "absolute" }}
            zIndex={10}
            top="-2.5rem"
            left="25%"
            mb={{ base: 8, md: 0 }}
          >
            <InputGroup>
              <InputLeftElement
                color="paragraph-color"
                pos="absolute"
                fontSize="2rem"
              >
                <RiSearch2Line />
              </InputLeftElement>
              <Input
                type="text"
                variant="unstyled"
                placeholder="Search property"
                h="full"
                w="full"
                _placeholder={{ color: "paragraph-color" }}
              />
            </InputGroup>
            <Button variant="primary" size={{ base: "sm", md: "md" }}>
              Search
            </Button>
          </Flex>
          <Image src={ImageHeroSection} alt="Image Hero sectios" />
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroSections;
