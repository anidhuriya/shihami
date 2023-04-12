import React from "react";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import "@fontsource/lato";
import MyButton from "../Custom/NftButton";

const Slogan = () => {
  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={4}
      mt={"70px"}
      flex="1"
      width="100%"
      id="Explore"
    >
      <Text color="#FFFFFF" style={{ fontFamily: "Oxanium" }} fontSize={"54px"}>
        EXPLORE, CREATE AND{" "}
      </Text>{" "}
      <Text color="#FFFFFF" style={{ fontFamily: "Oxanium" }} fontSize="54px">
        SELL YOUR NFT’S ON
      </Text>
      <Text color="#FFFFFF" style={{ fontFamily: "Oxanium" }} fontSize="54px">
        SHINIHAMI
      </Text>
      <Text
        color="#FFFFFF"
        fontSize="20px"
        fontWeight="100"
        style={{ fontFamily: "lato" }}
      >
        Shihami is the World’s first and largest NFT/Avatar marketplace
      </Text>
      <Box display="flex" alignItems="center" mt="100px" gap="6px">
        <MyButton
          variant="outline"
          mr={4}
          // style={{ fontFamily: "Oxanium" }}
          fontWeight="500"
        >
          Explore more
        </MyButton>
        <Link href="/DragDrop">
          <Button
            background="rgba(248, 29, 251, 0.05)"
            border="1px solid #F81DFB"
            color="#FFFFFF"
            mr={4}
            style={{ fontFamily: "Oxanium" }}
          >
            Create
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Slogan;
