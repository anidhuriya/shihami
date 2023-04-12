import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Stack,
  Heading,
  Link,
  Divider,
} from "@chakra-ui/react";
import Rectangle4 from "../../../public/Icons/Rectangle 4.svg";
import You from "../../../public/Icons/You.svg";
import Twitter from "../../../public/Icons/Twitter.svg";
import Facebook from "../../../public/Icons/Face.svg";
import Gmail from "../../../public/Icons/gmail.svg";

const Footer = () => {
  return (
    <Box
      as="footer"
      display="flex"
      width="100%"
      height="260px"
      justifyContent="space-evenly"
      background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.005) 100%)"
      mt="197px"
      alignItems="center"
      mb="58px"
    >
      <Flex align="center" justifyContent="flex-start" bg="#140C1F">
        <Rectangle4 />
        <Text
          fontSize="2xl"
          fontWeight="700"
          style={{ fontFamily: "Oxanium" }}
          color="#FFFFFF"
          flexDirection="column"
          ml="-7px"
        >
          HIHAMI
        </Text>
      </Flex>

      <Box
        as="footer"
        color="rgba(150, 131, 155, 1)"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Text fontSize="15px">Shihami is the worlds leading NFTs</Text>
        <Text fontSize="15px"> marketplace where you can discover, </Text>
        <Text fontSize="15px">sell and bid NFTs and get rich</Text>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          mt="30px"
          mb="30px"
        >
          <You />
          <Twitter />
          <Facebook />
          <Gmail />
        </Box>
        <Box>
          <Text fontSize="15px">All rights reserved @AniketDhuriya</Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="24px">
        <Heading fontSize="20px" color="#FFFFFF">
          About
        </Heading>
        <Link color="rgba(150, 131, 155, 1)" href="/PrivacyPolicy">
          About NFT
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/live-auctions">
          Live Auctions
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/nft-blog">
          NFT Blog
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/activity">
          Activity
        </Link>
      </Box>
      <Box display="flex" flexDirection="column" gap="24px">
        <Heading fontSize="20px" color="#FFFFFF">
          Support
        </Heading>
        <Link color="rgba(150, 131, 155, 1)" href="/help">
          Help & Support
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/support-item-details">
          Item Details
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/author-profile">
          Author Profile
        </Link>
        <Link color="rgba(150, 131, 155, 1)" href="/collections">
          Collections
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
