import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { FcFlashOn } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { flashSales } from "@/app/components/Data/flash";

const Flash = () => {
  return (
    <>
      <Container>
        <Product>
          <TextDiv>
            <FlashDiv>
              <Text>Flash Sales </Text>
              <FontAwesomeIcon
                icon={faBoltLightning}
                shake
                size="xl"
                style={{ color: "coral" }}
              />
            </FlashDiv>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BiSolidRightArrowAlt size={30} style={{ color: "#c64906" }} />
            </div>
          </TextDiv>
          <Box>
            {flashSales.map((item, index) => {
              const { discount, img, name, price, description, discountPrice } =
                item;
              return (
                <>
                  <BoxCard>
                    <Wish>
                      <Rate>
                        <Percent>
                          <b>{discount}</b>
                        </Percent>
                      </Rate>
                      {/* <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} /> */}
                      <AiOutlineHeart />
                    </Wish>
                    <Card>
                      <Image
                        style={{ marginTop: "10px" }}
                        src={img}
                        width={100}
                        height={150}
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
                </>
              );
            })}
          </Box>
        </Product>
      </Container>
    </>
  );
};

export default Flash;

const Container = styled.div`
  margin-top: 20px;
`;

const Product = styled.div``;
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
const Percent = styled.div`
  b {
    color: var(--base-color-dark, coral);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
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
  flex-direction: column;
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

  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  del {
    color: #cecece;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const FlashDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
