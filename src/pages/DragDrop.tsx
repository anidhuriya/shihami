import React from "react";
import { Flex, Box, Text, Input } from "@chakra-ui/react";
import Header from "./layout/Header";

const DragDrop = () => {
  return (
    <>
      <Flex
        alignItems="Flex-start"
        justifyContent="center"
        flexDirection="column"
      >
        <Header />
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection="column"
        mt="80px"
      >
        <Text color="#FFFFFF" fontSize="50px" style={{ fontFamily: "Oxanium" }}>
          Create Your Own Masterpiece
        </Text>
        <Text color="#FFFFFF" fontSize="18px" style={{ fontFamily: "Lato" }}>
          Get Onboard And Earn Money Like A Pro
        </Text>
      </Box>
      <Box bg="gray.100" p={2} rounded="md" cursor="pointer" mr={4}>
        <Input type="file" style={{ display: "none" }} />: (
        <Text>Drag and drop or click to select file</Text>)
      </Box>
    </>
  );
};

export default DragDrop;
