import React from "react";
import styled from "styled-components";
import LeftSideBar from "../sidebar/leftSideBar";
import Image from "next/image";
import Link from "next/link";
import PopularProducts from "./popular";
import Promo from "./promo";
import Flash from "./flash";
import { trends } from "@/app/components/Data/trends";
import Deals from "./deals";
import Blog from "./blog";
import Carousel from "react-elastic-carousel";

const BodyArea = () => {
  return (
    <ContentDiv>
      <ScrollArea>
        <ContentArea>
          <TitleDiv>
            <h2>Trending Categories</h2>
          </TitleDiv>
        </ContentArea>

        {/* <HurryUp>
          <HurryOne>
            <InnerBox>
              <h2>MacBooks </h2>
              <h5>
                Get the latest Apple <br /> Laptops for a low price{" "}
              </h5>

              <p>
                Starting at <b>$800</b>
              </p>
              <button>Shop Now</button>
            </InnerBox>
          </HurryOne>

          <HurryTwo>
            <InnerBox>
              <h2>Gadgets </h2>
              <h5>
                Get the latest Gadgets <br /> for a low price{" "}
              </h5>

              <p>
                Starting at <b>$50</b>
              </p>
              <button>Shop Now</button>
            </InnerBox>
          </HurryTwo>
        </HurryUp> */}
        {/* <PopularProducts /> */}
        {/* <Promo /> */}
        {/* <Flash /> */}
        {/* <Deals /> */}
        {/* <Blog /> */}
      </ScrollArea>
    </ContentDiv>
  );
};

export default BodyArea;

const ContentDiv = styled.div`
  
  width: 100%;
  @media (max-width: 1040px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const ScrollArea = styled.div`
  margin: 20px;
  width: 100%;
`;

const ContentArea = styled.div`
  width: 100%;
`;

const TitleDiv = styled.div`
  padding: 8px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #1c1c1c;

  h2 {
    color: var(--base-color-dark, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: fit-content;
  }
`;
const TrendingBox = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: ; */
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  /* @media (max-width: 1000px) {
    width: 100%;
  } */
`;
const TrendBox = styled.div`
  box-shadow: rgba(1, 1, 89, 0.25) 0px 30px 60px -12px inset,
    rgba(10, 1, 74, 0.3) 0px 18px 36px 18px inset;
  background-color: #fff;
  width: 200px;
  height: 200px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  b {
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
    padding: 5px;
  }
`;
const TrendCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  p {
  }
`;
const Btn = styled.button`
  position: absolute;
  text-decoration: none;
  outline: none;
  text-decoration-line: none;
  color: var(--base-color-dark, #fff);
  font-family: "Inter" sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
  background: #80008090;
  border: 1px solid purple;
  border-radius: 10px;
  padding: 6px 8px;
  &:hover {
    background: none;
    border: 1px solid #fff;
    color: var(--base-color-dark, #fff);
  }
`;
const HurryUp = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  gap: 13px;
  margin-top: 20px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
  }
`;

const HurryOne = styled.div`
  display: flex;
  /* align-items: center; */
  width: 50%;
  height: 350px;
  background-color: red;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* background-image: url("/image/macbook.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; */
  @media (max-width: 1040px) {
    width: 100%;
    flex-direction: column;
  }
`;
const HurryTwo = styled.div`
  width: 50%;
  height: 350px;
  background-color: purple;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: url("/image/unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; */
  @media (max-width: 1040px) {
    width: 100%;
  }
`;

const InnerBox = styled.div`
  margin-left: 45px;
  margin-top: 35px;
  width: 200px;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 4px;
    margin-top: 4px;
    position: absolute;
  }
  h2 {
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h5 {
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: var(--base-color-dark, #8d0404);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
  button {
    padding: 8px 16px;
    border-radius: 6px;
    border: 2px solid var(--white, #23011c);
    background: none;
    box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
    color: var(--dark, #8d0404);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    padding: 10px 8px;
    border-radius: 7px;
    &:hover {
      background: var(--base-color-dark, #23011c);
    }
  }
`;
