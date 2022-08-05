import { Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default LayoutMain;
