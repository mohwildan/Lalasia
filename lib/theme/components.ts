import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  sizes: {
    md: {
      py: "1.5rem",
      px: "3rem",
    },
    sm: {
      py: "1.3rem",
      px: "2.5rem",
    },
  },
  variants: {
    primary: {
      bg: "main-color",
      color: "screen-color",
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 700,
    color: "text-color",
    lineHeight: "130%",
  },
  variants: {
    H1: {
      fontSize: "64px",
    },
    H2: {
      fontSize: "44px",
    },
    "H3+": {
      fontSize: "26px",
      letterSpacing: "0.01em",
    },
    H3: {
      fontSize: "24px",
    },
    H4: {
      fontSize: "20px",
    },
    H5: {
      fontSize: "18px",
      color: "secondary-color",
    },
    H6: {
      fontSize: "16px",
    },
    "H6+": {
      fontSize: "14px",
    },
  },
};

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    lineHeight: "180%",
    color: "paragraph-color",
  },
  variants: {
    P1: {
      fontSize: "14px",
    },
    P2: {
      fontSize: "16px",
    },
    P3: {
      fontSize: "18px",
    },
    P4: {
      fontSize: "12px",
    },
  },
};
