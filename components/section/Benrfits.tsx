import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import BenefitCard from "../BenefitCard";
import ImageChokis from "../../public/image/3square.png";
import ImagePrice from "../../public/image/Group 4.png";
import ImageFastTime from "../../public/image/Group 5.png";

const Benrfits: FC = () => {
  return (
    <Box mt="5rem">
      <Flex
        align={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <Box flex={1}>
          <Heading
            as="h4"
            variant={{ base: "H6+", md: "H5" }}
            color="secondary-color"
          >
            Benefits
          </Heading>
          <Heading as="h2" variant={{ base: "H3", md: "H2" }}>
            Benefits when using our services
          </Heading>
        </Box>
        <Box flex={1}>
          <Text variant={{ base: "P1", md: "P3" }}>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </Text>
        </Box>
      </Flex>
      <Flex mt="3rem" gap={5} flexDir={{ base: "column", md: "row" }}>
        <BenefitCard img={ImageChokis} title="Many Choices">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non.
        </BenefitCard>
        <BenefitCard img={ImageFastTime} title="Fast and On Time">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non.
        </BenefitCard>
        <BenefitCard img={ImagePrice} title="Affordable Price">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non.
        </BenefitCard>
      </Flex>
    </Box>
  );
};

export default Benrfits;
