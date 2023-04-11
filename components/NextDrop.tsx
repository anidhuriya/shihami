import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import Arrow from "../../../public/Icons/Arrow.svg";
import ArrowForwardIcon from "@chakra-ui/react";

const NextDrop = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt={"70px"}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="#FFFFFF" style={{ fontFamily: "Oxanium" }} fontSize={"44px"}>
        Ready for Next NFT Drop?
      </Text>

      <Input
        mt="10px"
        width="25em"
        size="lg"
        background="rgba(248, 29, 251, 0.05)"
        border="1px solid #F81DFB"
        variant="outline"
        placeholder="info@gmail.com"
      />
    </Box>
  );
};

export default NextDrop;
