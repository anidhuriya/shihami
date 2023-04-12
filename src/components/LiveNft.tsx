import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Heading,
  Card,
  Image,
} from "@chakra-ui/react";
import User from "../../public/Icons/User Profile.svg";
import Lit from "../../public/Icons/lit.svg";
import MyButton from "../Custom/NftButton";
interface INFTCards {
  image: string;
  title: string;
  on_sale: boolean;
  price_eth: number;
  price_usd: number;
  creator: string;
}

const NFTCards: INFTCards[] = [
  {
    image: "/Images/monkey.png",
    on_sale: true,
    title: "Monkey Ape",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/mona.png",

    on_sale: true,
    title: "Vaghue",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/Wired.png",
    on_sale: true,
    title: "Wired Human",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/moonwalk.png",

    on_sale: true,
    title: "Moonfall",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/lisa.png",

    on_sale: true,
    title: "Racer To Go",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/DJ.png",

    on_sale: true,
    title: "Monkey DJ",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 65874.86,
  },
  {
    image: "/Images/Jhonny.png",
    on_sale: true,
    title: "Jhonny",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
  {
    image: "/Images/monkey.png",
    on_sale: true,
    title: "Planet",
    creator: "Buy @jsmith",
    price_eth: 4.89,
    price_usd: 654874.86,
  },
];
const LiveNFts = () => {
  return (
    <>
      <Box px={{ base: 4, md: 8 }} py={4} mt="150px" id="Live">
        <Text color="#FFFFFF" fontSize="20px" style={{ fontFamily: "Oxanium" }}>
          Most Appreciated NFTs On Sale For the day
        </Text>
        <Text
          color="#FFFFFF"
          fontSize="75px"
          mt="30px"
          style={{ fontFamily: "Oxanium" }}
        >
          Live Auction NFTs
        </Text>
      </Box>
      <Flex justifyContent="flex-end" width="100%">
        <Box marginLeft="auto">
          <Button
            background="rgba(248, 29, 251, 0.05)"
            border="1px solid #F81DFB"
            color="#FFFFFF"
            marginRight="40px"
          >
            View All
          </Button>
        </Box>
      </Flex>
      <Box gap="40px" display="flex" flexWrap="wrap" justifyContent="center">
        {NFTCards.map((nftCard) => (
          <Card
            key={nftCard.title}
            background="linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)"
            padding="3"
          >
            <Image
              src={nftCard.image}
              alt={nftCard.image}
              width="249px"
              height="284px"
            />
            <Box display="flex" mt="30px">
              <User />
              <Box
                display="flex"
                flexDirection="column"
                alignContent="flex-start"
                alignItems="flex=start"
                ml="10px"
              >
                <Text
                  color="#FFFFFF"
                  fontSize="20px"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                >
                  {nftCard.title}
                </Text>

                <Text
                  mb={4}
                  fontSize="10px"
                  color="#FFFFFF"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                >
                  {nftCard.creator}
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection="row-reverse"
              alignItems="flex-start"
            >
              <Box display="flex" alignItems="center" flexDirection="column">
                <Text
                  fontSize="12px"
                  color="#FFFFFF"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                >
                  {nftCard.price_eth} ETH
                </Text>
                <Text
                  fontSize="10px"
                  color="#FFFFFF"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                >
                  ${nftCard.price_usd} USD
                </Text>
              </Box>

              {nftCard.on_sale && (
                <Text
                  display="flex"
                  fontSize="12px"
                  color="#FFFFFF"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                  flexDirection="row-reverse"
                >
                  <Lit />
                  On Sale
                </Text>
              )}
            </Box>
            <Button
              background="rgba(248, 29, 251, 0.05)"
              border="1px solid #F81DFB"
              color="#FFFFFF"
              mt="10px"
            >
              Buy Now
            </Button>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default LiveNFts;
