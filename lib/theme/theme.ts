import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Button, Heading, Text } from "./components";

const colors = {
  "main-color": "#518581",
  "secondary-color": "#ffb23f",
  "text-color": "#151411",
  "paragraph-color": "#afadb5",
  "placeholder-color": "#f9f9f9",
  "screen-color": "#fff",
  "line-color": "#f3f3f3",
};

const components = {
  Button,
  Heading,
  Text,
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      bg: "screen-color",
    },
  },
};

export const theme = extendTheme({ colors, components, config, styles });
