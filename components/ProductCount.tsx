import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  desc: string;
}

const Count = ({ children, desc }: Props) => {
  return (
    <Box>
      <Heading variant={{ base: "H3", md: "H2" }}>{children}</Heading>
      <Text variant={{ base: "P1", md: "P3" }}>{desc}</Text>
    </Box>
  );
};

const ProductCount: FC = () => {
  return (
    <Flex justify="space-around" w="full" gap={1}>
      <Count desc="Years Experience">20+</Count>
      <Count desc="Happy Client">483</Count>
      <Count desc="Project Finished">150+</Count>
    </Flex>
  );
};

export default ProductCount;
