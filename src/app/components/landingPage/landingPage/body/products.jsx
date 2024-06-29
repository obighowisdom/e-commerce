import { Content, Stick } from "next/font/google";
import styled from "styled-components";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./productCard";
import { Items } from "@/app/components/Data/items";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { FcFlashOn } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { flashSales } from "@/app/components/Data/flash";



const Products = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1300, min: 680 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 3,
    },
  };

  return (
    <ContentBox>
      <Title><h4>NEW ARRIVAL</h4></Title>
      <Carousel responsive={responsive}>
        {flashSales.map((item) => {
          const {
            discount,
            img,
            productId,
            price,
            description,
            discountPrice,
          } = item;
          return (
            <div style={{display: "flex", justifyContent: "center"}}>
              <BoxCard key={productId}>
                <Wish>
                  <Percent>
                    <b>{discount}</b>
                  </Percent>
                </Wish>
                <Card>
                  <Image
                    className="Image"
                    src={img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="Image"
                  />
                  <Desc>
                    <b>{description}</b>
                  </Desc>
                  <Price>
                    {price} <del>{discountPrice}</del>{" "}
                  </Price>
                </Card>
              </BoxCard>
            </div>
          );
        })}
      </Carousel>
    </ContentBox>
  );
};

export default Products;

const ContentBox = styled.div`
  

`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #def5e3;
  h4 {
    color: var(--base-color-dark, coral);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const BoxCard = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  width: 200px;
  height: 300px;
  padding-bottom: 12px;
  margin-top: 5px;
  gap: 15px;
  @media (max-width: 1040px) {
    width: 100px;
    height: 100%;
    flex-direction: column;
  }
`;
const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Percent = styled.div`
  background-color: #faeedacb;
  display: flex;

  b {
    color: var(--base-color-dark, coral);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 700px) {
      font-size: 8px;
    }
  }
`;
const Wish = styled.div`
  position: absolute;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    margin-bottom: 3px;
  }

  b {
    text-align: center;
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    @media (max-width: 700px) {
      font-size: 9px;
    }
  }
`;
const Price = styled.b`
  color: var(--base-color-dark, #8d0404);

  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  @media (max-width: 700px) {
    font-size: 9px;
  }
  del {
    color: #cecece;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 700px) {
      font-size: 8px;
    }
  }
`;
