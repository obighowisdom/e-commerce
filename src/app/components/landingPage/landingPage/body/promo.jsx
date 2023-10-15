import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const Promo = () => {
  return (
    <Content>
      <Box>
        <CardOne>
          <Carousel
            indicators={false}
            controls={false}
            fade
            style={{ width: "100%", paddingTop: "12px" }}
          >
            <Carousel.Item>
              <BannerImgDiv>
                <Image
                  src="/nobg/fridge.png"
                  width={200}
                  height={250}
                  alt="logo"
                />
              </BannerImgDiv>
            </Carousel.Item>
          </Carousel>
        </CardOne>
        <CardTwo>
          <TextDiv>
            <Discount>
              <h3>Promo! Promo!! Promo!!!</h3>
            </Discount>
            <Text>
              Up to 25% Discount <br />
              Check it Out
            </Text>
            <BtnDiv>
              <Btn>Shop now</Btn>
            </BtnDiv>
          </TextDiv>
        </CardTwo>
      </Box>
    </Content>
  );
};

export default Promo;

const Content = styled.div`
  margin-top: 20px;
  background: #ebf4fa;
  height: 300px;
  /* border-top-right-radius: 15px; */
  /* border-top-left-radius: 15px; */
  padding: 20px;
  width: 100%;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const CardOne = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }

  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;
const CardTwo = styled.div`
/* margin-top: 40px; */
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const BannerImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Discount = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  h3 {
    text-align: center;
    color: var(--base-color-dark, #ff0000);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const Text = styled.p`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: var(--base-color-dark, #3c0202);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Btn = styled.button`
  width: fit-content;
  border: none;
  background-color: #3c0202;
  color: #fff;
  font-family: "Inter" sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 6px 8px;
  border-radius: 8px;
`;
