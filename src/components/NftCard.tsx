import React from "react";
import {
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";

const NftCard = () => {
  return (
    <>
      <Box position="relative" flex="1" width="100%">
        <Card
          width="260px"
          height="fit-content"
          background="linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)"
          backdropFilter=" blur(17px)"
          borderWidth="2.5px 0px 2.5px 0px"
          borderColor="rgba(255, 255, 255, 0.4)"
          borderRadius="41.6667px"
          position="absolute"
          top="26%"
          left="10%"
          zIndex="1"
        >
          <CardBody>
            <Image
              src="/Images/Rectangle3.png"
              alt="Darth"
              width="287.5px"
              height="281.33x"
              objectFit="cover"
              borderColor="#8C30F5"
            />
            <Stack mt="16px" spacing="3" alignItems="center">
              <Heading
                size="md"
                style={{ fontFamily: "Oxanium" }}
                color="#FFFFFF"
                fontWeight="500"
              >
                Bleeding Ghost
              </Heading>
              <Text
                style={{ fontFamily: "Oxanium" }}
                color="#FFFFFF"
                fontWeight="500"
              >
                $ 152,793.17
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          width="260px"
          height="fit-content"
          background="linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)"
          backdropFilter="blur(18px)"
          borderWidth="2.5px 0px 2.5px 0px"
          borderColor="rgba(255, 255, 255, 0.4)"
          borderRadius="41.6667px"
          position="absolute"
          top="10%"
          left="28%"
          zIndex="4"
        >
          <CardBody>
            <Image
              src="/Images/Rectangle6.png"
              alt="MichaelAngelo"
              width="287.5px"
              height="281.33x"
              objectFit="cover"
              borderColor="#8C30F5"
            />
            <Stack mt="16px" spacing="3" alignItems="center">
              <Heading
                size="md"
                style={{ fontFamily: "Oxanium" }}
                color={"#FFFFFF"}
                fontWeight="500"
              >
                Living Of The Art
              </Heading>
              <Text
                style={{ fontFamily: "Oxanium" }}
                color={"#FFFFFF"}
                fontWeight="500"
              >
                $ 543,576.13
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          height="fit-content"
          width="260px"
          background="linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%)"
          backdropFilter="blur(17px)"
          borderWidth="2.5px 0px 2.5px 0px"
          borderColor="rgba(255, 255, 255, 0.4)"
          borderRadius="41.6667px"
          position="absolute"
          top="38%"
          left="52%"
          zIndex="1"
        >
          <CardBody>
            <Image
              src="/Images/Rectangle4.png"
              alt="Medusa"
              width="287.5px"
              height="281.33x"
              objectFit="cover"
              borderColor="#8C30F5"
            />
            <Stack mt="16px" spacing="3" alignItems="center">
              <Heading
                size="md"
                style={{ fontFamily: "Oxanium" }}
                color={"#FFFFFF"}
                fontWeight="500"
              >
                Statue of vughae
              </Heading>
              <Text
                style={{ fontFamily: "Oxanium" }}
                color={"#FFFFFF"}
                fontWeight="500"
              >
                $ 452,968.48
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default NftCard;
