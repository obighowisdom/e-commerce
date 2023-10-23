import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/Ai";
import { BsFire } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import { HotDeals } from "@/app/components/Data/dealsData";




const Deals = () => {
  return (
    <Container>
      <Hot>
        <HotText>
          <h5>Hot Sales </h5>
        </HotText>
        <Fire>
          <BsFire size={25} style={{ color: "coral" }} />
        </Fire>
      </Hot>
      <Carousel
        indicators={false}
        controls={true}
        fade
        style={{ width: "100%", paddingTop: "12px" }}
      >
        {HotDeals.map((item) => {
          const {productId, discount, img, name, description, price, discountPrice} =item
          return (
            <Carousel.Item key={productId}>
              <ProductDiv>

                <ImgCard>
                  <Image
                    src={img}
                    width={0}
                    height={0}
                    alt="image"
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </ImgCard>
                <Description>
                  <TextOne>{name}</TextOne>
                  <Rate>
                    {" "}
                    <AiFillStar style={{ color: "#888803" }} />
                    <AiFillStar style={{ color: "#888803" }} />
                    <AiFillStar style={{ color: "#888803" }} />
                    <AiFillStar style={{ color: "#888803" }} />
                    <AiFillStar style={{ color: "gray" }} />
                  </Rate>
                  <Amount>
                    {price}
                    <del>{discountPrice} </del>
                  </Amount>
                  <TextTwo>{description}</TextTwo>
                  <TimeBox>
                    <Time>
                      <h3>00</h3>
                      <p>Days</p>
                    </Time>
                    <Time>
                      <h3>00</h3>
                      <p>Hours</p>
                    </Time>
                    <Time>
                      <h3>00</h3>
                      <p>Min</p>
                    </Time>
                    <Time>
                      <h3>00</h3>
                      <p>Sec</p>
                    </Time>
                  </TimeBox>
                  <Btn>Check Out</Btn>
                </Description>
              </ProductDiv>
            </Carousel.Item>
          );          
        })}
      
      </Carousel>
    </Container>
  );
};

export default Deals;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  background: #3c020274;

  left: -50%;
  right: 0%;
`;
const Hot = styled.div`
  background-color: purple;
  width: fit-content;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  p {
  }
`;
const Fire= styled.div`
  

`
const HotText = styled.div`
  h5 {
    color: var(--base-color-dark, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

const ProductDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 13px;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ImgCard = styled.div`
  /* width: 300px; */
  height: 500px;
  display: flex;
  @media (max-width: 800px) {
    /* width: 200px; */
    height: 400px;
    flex-direction: column;
    
  }
  b {
    color: var(--base-color-dark, red);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;
const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1040px) {
    width: 100%;
    
  }
`;
const TextOne = styled.p`
  color: var(--base-color-dark, #1c1c1c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

const Rate = styled.div``;

const Amount = styled.p`
  margin-top: 20px;
  text-decoration: none;
  outline: none;
  text-decoration-line: none;
  color: var(--base-color-dark, purple);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  del {
    color: var(--base-color-dark, gray);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;
const TextTwo = styled.p`
  text-align: center;
  text-decoration: none;
  outline: none;
  text-decoration-line: none;
  color: var(--base-color-dark, #1c1c1c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 2;
  width: 380px;
`;
const TimeBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;
const Time = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  h3 {
    text-decoration: none;
    outline: none;
    text-decoration-line: none;
    color: var(--base-color-dark, coral);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    padding-bottom: 5px;
    border-bottom: 1px solid purple;
  }
  p {
    text-decoration: none;
    outline: none;
    text-decoration-line: none;
    color: var(--base-color-dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;

const Btn = styled.button`
  margin-top: 30px;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: #3c0202;
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  &:hover {
    background: #fff;
    color: var(--base-color-dark, #3c0202);
    border: 1px solid #3c0202;
  }
`;
