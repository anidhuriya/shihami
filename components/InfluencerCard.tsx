import React from "react";
import { Box, Text, Button, Flex, Card, Image } from "@chakra-ui/react";

import Verified from "../public/Icons/verified.svg";
import MyButton from "../Custom/NftButton";
interface IINCards {
  image: string;
  second: string;
  third: string;
  by: string;
  creator: string;
}
const NFTCards: IINCards[] = [
  {
    image: "/Images/Jhonny.png",
    second: "/Images/moonwalk.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/DJ.png",
    second: "/Images/Tokyo.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/Wired.png",
    second: "/Images/BrokeApe.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/Monkey.png",
    second: "/Images/lisa.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },

  {
    image: "/Images/Jhonny.png",
    second: "/Images/moonwalk.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/DJ.png",
    second: "/Images/Tokyo.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/Wired.png",
    second: "/Images/BrokeApe.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
  {
    image: "/Images/Monkey.png",
    second: "/Images/lisa.png",
    third: "/Images/sara.png",
    by: "@Jsmith",
    creator: "John Smith",
  },
];
const InfluencerNFts = () => {
  return (
    <>
      <Box px={{ base: 4, md: 8 }} py={4} mt="150px" id="Influencer">
        <Text
          color="#FFFFFF"
          fontSize="20px"
          style={{ fontFamily: "Oxanium" }}
          id="Influencer"
        >
          Watch And Follow Celebrities To Get The Best Collection Of NFTs
        </Text>
        <Text
          color="#FFFFFF"
          fontSize="75px"
          mt="30px"
          style={{ fontFamily: "Oxanium" }}
        >
          Joined Influencers
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
      <Box gap="30px" display="flex" flexWrap="wrap" justifyContent="center">
        {NFTCards.map((nftCard, i) => (
          <Card
            key={i}
            background="linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)"
            padding="22px"
            width="286px"
            height="291px"
          >
            <Box
              display="flex"
              position="relative"
              justifyContent="space-evenly"
              gap="8px"
            >
              <Image
                src={nftCard.image}
                alt="nftCard.image"
                width="174px"
                height="180px"
              />
              <Image
                src={nftCard.second}
                alt="nftcard.second"
                width="127px"
                height="178px"
              />
            </Box>

            <Box>
              <Image
                src={nftCard.third}
                alt="nftCard.image"
                width="90px"
                height="90px"
                position="absolute"
                top="50%"
                left="13%"
                zIndex="4"
              />
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box height="100%" mt="33px">
                <Flex alignItems="center">
                  <Text
                    fontSize="20px"
                    color="#FFFFFF"
                    fontWeight="500"
                    style={{ fontFamily: "Oxanium" }}
                    display="flex"
                    flexDirection="row"
                    mr="11.6px"
                  >
                    {nftCard.creator}
                  </Text>
                  <Verified />
                </Flex>
                <Text
                  color="#FFFFFF"
                  fontSize="10px"
                  fontWeight="500"
                  style={{ fontFamily: "Oxanium" }}
                >
                  {nftCard.by}
                </Text>
              </Box>
              <Box>
                <Button
                  background="rgba(248, 29, 251, 0.05)"
                  border="1px solid #F81DFB"
                  borderRadius="42px"
                  color="#FFFFFF"
                  mt="33px"
                >
                  Follow
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};
export default InfluencerNFts;
