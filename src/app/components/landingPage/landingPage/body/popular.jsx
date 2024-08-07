import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { PopularItems } from "@/app/components/Data/popularProducts";

const PopularProducts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Container>
        <Product>
          <TextDiv>
            <Text>Popular Products </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ViewBtn>View All Products</ViewBtn>
              <BiSolidRightArrowAlt style={{ color: "#fff" }} />
            </div>
          </TextDiv>
    
        </Product>
      </Container>
    </>
  );
};

export default PopularProducts;

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Product = styled.div`
  width: 100%;
`;
const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: purple;
`;

const ViewBtn = styled.button`
  border: none;
  background: none;
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.h3`
  color: var(--base-color-dark, #fffcf7);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  width: fit-content;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fffcf7;
  @media (max-width: 1040px) {
    width: 100%;
  }
`;
const BoxCard = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* border-radius: 15px; */
  background-color: #fff;
  width: 200px;
  height: 280px;
  padding-bottom: 12px;
  margin-top: 10px;
  gap: 15px;
`;
const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
`;
const Rate = styled.div``;
const Wish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
  padding-right: 15px;
  padding-left: 15px;
`;
const Desc = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  margin-top: 10px;
  margin-bottom: 10px;

  b {
    text-align: center;
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;
const Price = styled.b`
  color: var(--base-color-dark, #8d0404);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
