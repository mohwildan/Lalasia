import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContainerMx: FC<Props> = ({ children }) => {
  return (
    <Flex textAlign="center" align="center" justify="center">
      <Box maxW={{ base: "100%", sm: "100%", md: "55em" }}>{children}</Box>
    </Flex>
  );
};

export default ContainerMx;
