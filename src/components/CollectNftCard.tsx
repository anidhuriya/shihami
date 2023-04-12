import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/core";
// import SwiperCore, { EffectCoverflow } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([EffectCoverflow]);

SwiperCore.use([EffectCoverflow]);
import { EffectCoverflow, Pagination } from "swiper";

const nftArray = [
  {
    image: "/Images/monkey.png",
    name: "NFT 1",
    description: "This is the first NFT",
  },
  {
    image: "/Images/mona.png",
    name: "NFT 2",
    description: "This is the second NFT",
  },
  {
    image: "/Images/Wired.png",
    name: "NFT 4",
    description: "This is the fourth NFT",
  },
  {
    image: "/Images/moonwalk.png",
    name: "NFT 3",
    description: "This is the third NFT",
  },
  {
    image: "/Images/lisa.png",
    name: "NFT 5",
    description: "This is the fifth NFT",
  },
  {
    image: "/Images/DJ.png",
    name: "NFT 6",
    description: "This is the sixth NFT",
  },
  {
    image: "/Images/Jhonny.png",
    name: "NFT 7",
    description: "This is the seventh NFT",
  },
];

const CollectNftCard = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 10,
        stretch: 1,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      }}
      initialSlide={3}
    >
      {nftArray.map((nft, i) => (
        <SwiperSlide key={i}>
          <Box p="2" borderRadius="lg" overflow="hidden">
            {" "}
            <Image src={nft.image} alt={nft.name} />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CollectNftCard;
