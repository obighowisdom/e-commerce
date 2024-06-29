import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Banner = () => {
  return (
    <>
      <BannerDiv>
        <ImageContain>
          <ImageOne src="/image/gra.svg" width={600} height={600} alt="" />
        </ImageContain>
        <BannerImgDiv>
          <BannerText>
             <TextTwo>HOT TRENDING PRODUCTS</TextTwo>
            <TextThree> SALES UP TO 30% </TextThree>
            <TextFour>
              Checkout for the Hot New Apple Series <br />{" "}
              <b style={{ color: "#1c1c1c" }}>LIMITED OFFER </b>
            </TextFour>
            <BannerBtn>Check it Out</BannerBtn>
          </BannerText>
        </BannerImgDiv>
        <Carousel
          indicators={false}
          controls={false}
          fade
          style={{ width: "100%", paddingTop: "12px" }}
        >
          <Carousel.Item>
            <BannerImgDiv>
              <Image
                src="/nobg/whiteear.png"
                width={280}
                height={350}
                alt="logo"
              />
            </BannerImgDiv>
          </Carousel.Item>
          <Carousel.Item>
            <BannerImgDiv>
              <Image src="/image/new.png" width={300} height={300} alt="logo" />
            </BannerImgDiv>
          </Carousel.Item>
          <Carousel.Item>
            <BannerImgDiv>
              <Image
                src="/nobg/apple.png"
                width={270}
                height={400}
                alt="logo"
              />
            </BannerImgDiv>
          </Carousel.Item>
        </Carousel>
      </BannerDiv>
    </>
  );
};

export default Banner;

const BannerDiv = styled.div`
  position: inherit;
  margin-top: 50px;
  width: 100%;
  display: flex;
  padding: 12px;
  background: #fffcf7;
  @media (max-width: 1000px) {
    flex-wrap: wrap-reverse;
    }
`;

const ImageContain = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: color 10s ease-in-out infinite;

  @keyframes color {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: 0;
      left: 25%;
    }
    50% {
      top: 50%;
      left: 50%;
    }
    75% {
      top: 25%;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @media (min-width: 1440px) {
    @keyframes color {
      0% {
        top: 0;
        left: 0;
      }
      25% {
        top: 0;
        left: 5cm;
      }
      50% {
        top: 50%;
        left: 50%;
      }
      75% {
        top: 50%;
        left: 0;
      }
      100% {
        top: 0;
        left: 0;
      }
    }
  }
`;

const ImageOne = styled(Image)`
  width: 300px;
  position: absolute;

  @media (min-width: 1440px) {
    width: 850px;
    height: 850px;
    position: absolute;
  }
`;

const BannerImgDiv = styled.div`
  width: 100%;
  height: 373px;
  display: flex;
  justify-content: space-around;
`;

const BannerText = styled.div`
  margin-left: 40px;
  margin-top: 70px;
`;

const TextOne = styled.p`
  color: var(--base-color-dark, #1c1c1c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  color: #3c0202;
`;

const TextTwo = styled.h3`
  color: var(--base-color-dark, #3c0202);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TextThree = styled.p`
  color: var(--base-color-dark, #8d0404);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
const TextFour = styled.p`
  color: var(--base-color-dark, #23011c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 2rem;
`;
const BannerBtn = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--white, #fff);
  background: var(--base-color-dark, #23011c);
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
`;
