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
  Grid,
} from "@chakra-ui/react";

const WalletCard = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      flexDirection="column"
    >
      <Text
        textAlign="center"
        bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(248, 29, 251, 1))"
        backgroundClip="text"
        fontSize="20px"
        fontWeight="400"
      >
        Trade With World’s Most Trusted And Fastest Wallets
      </Text>
      <Text color="#FFFFFF" fontSize="75px" style={{ fontFamily: "Oxanium" }}>
        Wallets We Support
      </Text>

      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="center"
        gap="100px"
        mt="80px"
      >
        <Box>
          <Card
            width="200px"
            height="250px"
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter=" blur(10px)"
            borderWidth="2.5px 0px 2.5px 0px"
            borderRadius="15px"
            alignItems="center"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
                borderRadius="full"
                height="110px"
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/Images/Metamask.png"
                  alt="Darth"
                  width="75px"
                  height="74px"
                  objectFit="cover"
                  borderRadius="50%"
                />
              </Box>
              <Stack mt="16px" spacing="3" alignItems="center">
                <Heading
                  size="md"
                  style={{ fontFamily: "Oxanium" }}
                  color="#FFFFFF"
                  fontWeight="500"
                >
                  Metamask
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            width="200px"
            height="250px"
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter=" blur(10px)"
            borderWidth="2.5px 0px 2.5px 0px"
            borderRadius="15px"
            alignItems="center"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
                borderRadius="full"
                height="110px"
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/Images/Binance.png"
                  alt="Darth"
                  width="75px"
                  height="74px"
                  objectFit="cover"
                />
              </Box>
              <Stack mt="16px" spacing="3" alignItems="center">
                <Heading
                  size="md"
                  style={{ fontFamily: "Oxanium" }}
                  color="#FFFFFF"
                  fontWeight="500"
                >
                  Binance
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            width="200px"
            height="250px"
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter=" blur(10px)"
            borderWidth="2.5px 0px 2.5px 0px"
            borderRadius="15px"
            alignItems="center"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
                borderRadius="full"
                height="110px"
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/Images/Trust.png"
                  alt="Darth"
                  width="75px"
                  height="74px"
                  objectFit="cover"
                />
              </Box>
              <Stack mt="16px" spacing="3" alignItems="center">
                <Heading
                  size="md"
                  style={{ fontFamily: "Oxanium" }}
                  color="#FFFFFF"
                  alignItems="center"
                  fontWeight="500"
                >
                  Trust Wallet
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            width="200px"
            height="250px"
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter=" blur(10px)"
            borderWidth="2.5px 0px 2.5px 0px"
            borderRadius="15px"
            alignItems="center"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
                borderRadius="full"
                height="110px"
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/Images/Alpha.png"
                  alt="Darth"
                  width="75px"
                  height="74px"
                  objectFit="cover"
                />
              </Box>
              <Stack mt="16px" spacing="3" alignItems="center">
                <Heading
                  size="md"
                  style={{ fontFamily: "Oxanium" }}
                  color="#FFFFFF"
                  fontWeight="500"
                >
                  Alpha
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card
            width="200px"
            height="250px"
            background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
            backdropFilter=" blur(10px)"
            borderWidth="2.5px 0px 2.5px 0px"
            borderRadius="15px"
            alignItems="center"
          >
            <CardBody
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                background="linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
                borderRadius="full"
                height="110px"
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/Images/CoinGecko.png"
                  alt="Darth"
                  width="75px"
                  height="74px"
                  objectFit="cover"
                />
              </Box>
              <Stack mt="16px" spacing="3" alignItems="center">
                <Heading
                  size="md"
                  style={{ fontFamily: "Oxanium" }}
                  color="#FFFFFF"
                  fontWeight="500"
                >
                  CoinGecko
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default WalletCard;
