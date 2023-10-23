import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import { PopularItems } from "@/app/components/Data/popularProducts";

const ProductCard = () => {
  return (
    <div>
      <Box>
        {PopularItems.map((item) => {
          const { productId, img, description, amount } = item;
          return (
            <BoxCard key={productId}>
              <Wish>
                <Rate>
                  <AiFillStar style={{ color: "#888803" }} />
                  <AiFillStar style={{ color: "#888803" }} />
                  <AiFillStar style={{ color: "#888803" }} />
                  <AiFillStar style={{ color: "#888803" }} />
                  <AiFillStar style={{ color: "gray" }} />
                </Rate>
                {/* <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} /> */}
                <AiOutlineHeart />
              </Wish>
              <Card>
                <ImgBox>
                  <Image
                    src={img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "100%" }}
                    alt="products"
                  />
                </ImgBox>

                <Desc>
                  <b>{description}</b>
                </Desc>
                <Price>{amount} </Price>
              </Card>
            </BoxCard>
          );
        })}
      </Box>
    </div>
  );
};

export default ProductCard;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fffcf7;
  gap: 13px;
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
  @media (max-width: 1040px) {
    width: 150px;
  }
`;
const ImgBox = styled.div`
    height: 150px;
`

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
