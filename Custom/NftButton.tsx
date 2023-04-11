import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  mr?: number;
  ml?: number;
  borderRadius?: string;
  mt?: string;
  mb?: string;
  variant?: string;
  fontWeight?: string;
  style?: string;
}

const MyButton = ({
  children,
  mr = 0,
  ml = 0,
  borderRadius,
  mt,
  variant,
  fontWeight,
  style,
  ...props
}: Props) => (
  <Button
    background="rgba(173, 26, 175, 1)"
    border="1px solid #F81DFB"
    color="#FFFFFF"
    {...props}
  >
    {children}
  </Button>
);

export default MyButton;
