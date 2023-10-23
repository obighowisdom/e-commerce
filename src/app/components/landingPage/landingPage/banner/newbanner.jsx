import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import { BannerProducts } from "@/app/components/Data/bannerData";

const NewBanner = () => {
  return (
    <BannerContainer>
      <Carousel
        indicators={false}
        controls={true}
        fade
        style={{ width: "100%", paddingTop: "12px" }}
      >
        {BannerProducts.map((items, index) => {
          const { img, title } = items;
          return (
            <Carousel.Item key={index}>
              <BannerBox>
                <Image
                  src={img}
                  width={0}
                  height={0}
                  alt="Image"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Overlay>
                  <motion.div
                    style={{ width: "100%", display: "flex" }}
                    animate={{ x: 100 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      ease: "linear",
                      duration: 3,
                      x: { duration: 1 },
                    }}
                  >
                    <OverlayBox>
                      <h4>{title.toUpperCase()} </h4>
                    </OverlayBox>
                  </motion.div>
                </Overlay>
              </BannerBox>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </BannerContainer>
  );
};

export default NewBanner;
const BannerContainer = styled.div`
  position: relative;
  margin-top: 53px;
  width: 100%;
`;
const BannerBox = styled.div`
  height: 450px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 250px;
  }
`;

const Overlay = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000046;
  top: 0%;
  display: flex;
  align-items: center;
`;

const OverlayBox = styled.div`
  width: fit-content;
  background: #faeeda5a;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    padding: 0px;
    border-radius: 5px;
  }

  h4 {
    color: #3c0202;
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin-top: 6px;
    @media (max-width: 700px) {
      font-size: 15px;
    }
  }
`;
