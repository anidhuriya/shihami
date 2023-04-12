import React from "react";
import { Flex, Box, Image, Heading, Text, Grid } from "@chakra-ui/react";
import Wallet from "../../public/Icons/wallet.svg";
import Collections from "../../public/Icons/collections.svg";
import AddNfts from "../../public/Icons/addNfts.svg";
import Sale from "../../public/Icons/sale.svg";

const Work = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="265px"
      mt="120px"
    >
      <Text
        alignItems="center"
        color="#FFFFFF"
        fontSize="40px"
        fontWeight="500"
        style={{ fontFamily: "Oxanium" }}
      >
        How it works
      </Text>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="center"
        mt="62px"
        gap="30px"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            bg="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            padding="15px"
            mb="20px"
          >
            <Wallet />
          </Box>
          <Text
            style={{ fontFamily: "Oxanium" }}
            color="#FFFFFF"
            fontWeight="400"
          >
            Set up your wallet
          </Text>
        </Box>
        <Box as="span" pb="1" color="#FFFFFF" gap="30px">
          &ndash; &ndash; &ndash; &ndash; &ndash; &ndash;&#x2BC1;
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            bg="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            padding="15px"
            mb="20px"
          >
            <Collections />
          </Box>
          <Text
            style={{ fontFamily: "Oxanium" }}
            color="#FFFFFF"
            fontWeight="400"
          >
            Create your collection
          </Text>
        </Box>

        <Box as="span" pb="1" color="#FFFFFF">
          &ndash; &ndash; &ndash; &ndash; &ndash; &ndash;&#x2BC1;
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            bg="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            padding="15px"
            mb="20px"
          >
            <AddNfts />
          </Box>
          <Text
            style={{ fontFamily: "Oxanium" }}
            color="#FFFFFF"
            fontWeight="400"
          >
            Add your NFTs
          </Text>
        </Box>
        <Box as="span" pb="1" color="#FFFFFF" alignItems="center">
          &ndash; &ndash; &ndash; &ndash; &ndash; &ndash;&#x2BC1;
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            borderRadius="50%"
            bg="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            padding="15px"
            mb="20px"
          >
            <Sale />
          </Box>
          <Text
            style={{ fontFamily: "Oxanium" }}
            color="#FFFFFF"
            fontWeight="400"
          >
            List them for sale
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
