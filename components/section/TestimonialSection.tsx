import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import ContainerMx from "../ContainerMx";
import SliderTestimonial from "../SliderTestimonial";

const TestimonialSection: FC = () => {
  return (
    <Box mt="6rem">
      <ContainerMx>
        <Heading
          as="h4"
          variant={{ base: "H6+", md: "H5" }}
          color="secondary-color"
        >
          Testimonials
        </Heading>
        <Heading as="h2" variant={{ base: "H3", md: "H2" }} mt={1}>
          What our customer say
        </Heading>
        <Text variant={{ base: "P1", md: "P3" }} mt="1.4rem">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </Text>
      </ContainerMx>
        <Box mt="3rem">
        <SliderTestimonial />
      </Box>
      </Box>
  );
};

export default TestimonialSection;
