import { Flex, Stack } from "@chakra-ui/react";
import Header from "./layout/Header";
import Slogan from "../../components/Slogan";
import NftCard from "../../components/NftCard";
import MilkyWay from "../../components/MilkyWay";
import WalletCard from "../../components/WalletCard";
import Work from "../../components/Work";
import CollectionCard from "../../components/CollectionCard";
import CollectNftCard from "../../components/CollectNftCard";
import TrendingNFts from "../../components/TrendingNFts";
import LiveNft from "../../components/LiveNft";
import InfluencerNFts from "../../components/InfluencerCard";
import NextDrop from "../../components/NextDrop";
import Footer from "./layout/Footer";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Flex
      alignItems={"Flex-start"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Header />
      <Stack flexDirection={"row"} width="100%">
        <Slogan />
        <NftCard />
      </Stack>
      <MilkyWay />
      <WalletCard />
      <Work />
      <CollectionCard />
      <CollectNftCard />
      <TrendingNFts />
      <LiveNft />
      <InfluencerNFts />
      <NextDrop />
      <Footer />
    </Flex>
  );
};
export default Home;
