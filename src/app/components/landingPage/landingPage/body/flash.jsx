import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { flashSales } from "@/app/components/Data/flash";

const Flash = () => {
  return (
    <>
      <BoxDiv>
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
            <BoxCard key={productId}>
              <Wish>
                <Percent>
                  <b>{discount}</b>
                </Percent>
              </Wish>
              <Card>
                <ImgCard>
                  <Image
                    className="Image"
                    src={img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt="Image"
                  />
                </ImgCard>

                <Desc>
                  <b>{description}</b>
                </Desc>
                <Price>
                  {price} <del>{discountPrice}</del>{" "}
                </Price>
              </Card>
            </BoxCard>
          );
        })}
      </BoxDiv>
    </>
  );
};

export default Flash;
const ImgCard = styled.div`
  width: 100%;
  height: 150px;
  object-fit: cover;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

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
const BoxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const BoxCard = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
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
  /* display: flex; */
  /* justify-content: flex-start;
  align-items: flex-start; */
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

