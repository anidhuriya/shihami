import React from "react";
import { Box, Text } from "@chakra-ui/react";

const CollectionCard = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      flexDirection="column"
      mt="175px"
    >
      <Text
        textAlign="center"
        bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(248, 29, 251, 1))"
        backgroundClip="text"
        fontSize="20px"
        fontWeight="400"
      >
        Explore our newly released NFT collection
      </Text>
      <Text
        color="#FFFFFF"
        fontSize="75px"
        style={{ fontFamily: "Oxanium" }}
        mb="60px"
      >
        Our collection
      </Text>
    </Box>
  );
};

export default CollectionCard;
