import { Box, Flex, Text, Button } from "@chakra-ui/react";
import MyButton from "../../Custom/NftButton";
import Rectangle4 from "../../../public/Icons/Rectangle 4.svg";
import AccountButton from "../../components/Account";
import { Link } from "@chakra-ui/react";

const Header = () => {
  // const handleSetActive = () => {};
  return (
    <Flex
      as="header"
      align="center"
      justifyContent="flex-start"
      px={{ base: 4, md: 8 }}
      py={4}
      bg={"#140C1F"}
      width={"100%"}
    >
      <Flex align="center">
        <Rectangle4 />
        <Text
          fontSize="25px"
          fontWeight={"400"}
          style={{ fontFamily: "Oxanium" }}
          color={"#FFFFFF"}
          flexDirection={"column"}
          ml="-7px"
        >
          HIHAMI
        </Text>
      </Flex>

      <Flex align="center" width={"100%"} flex={"1"} justifyContent={"center"}>
        <Box
          display={{ base: "none", md: "block" }}
          backdropFilter="blur(20.888px)"
          background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"
        >
          <Button
            variant="ghost"
            color={"#FFFFFF"}
            fontSize={"18px"}
            fontWeight={"400"}
            style={{ fontFamily: "Oxanium" }}
          >
            <Link href="#Explore"> EXPLORE </Link>
          </Button>

          <Button
            variant="ghost"
            color={"#FFFFFF"}
            fontSize={"18px"}
            fontWeight={"400"}
          >
            <Link href="#Trending"> TRENDING NFTs </Link>
          </Button>
          <Button
            variant="ghost"
            color={"#FFFFFF"}
            fontSize={"18px"}
            fontWeight={"400"}
          >
            <Link href="#Live"> AUCTIONED NFTs</Link>
          </Button>
          <Button
            variant="ghost"
            color={"#FFFFFF"}
            fontSize={"18px"}
            fontWeight={"400"}
          >
            <Link href="#Influencer"> INFLUENCERS </Link>
          </Button>
        </Box>
      </Flex>

      <Box display="flex" alignItems="center" gap="15px">
        <MyButton>Connect Wallet</MyButton>
        <AccountButton />
      </Box>
    </Flex>
  );
};

export default Header;
