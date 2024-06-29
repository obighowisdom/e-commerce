import React from 'react'
import styled from "styled-components"
import Image from 'next/image'
import Carousel from "react-bootstrap/Carousel";
import { Abroad } from '@/app/components/Data/abroad';



const Kids = () => {
  return (
    <Container>
      <ContentBox>
        <Grid>
          <TitleDiv>
            <h3>Kids Corner</h3>
          </TitleDiv>

          <ImgBx>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/AirpodsMax.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                  position: "relative",
                }}
              />
              <Btn>
                <button>View More</button>
              </Btn>
            </Box>
          </ImgBx>
        </Grid>
        <CardArea>
          <TitleDiv>
            <h3>Ship From Abroad</h3>
          </TitleDiv>
          <Card>
            <Carousel
              indicators={false}
              controls={false}
              fade
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              {Abroad.map((item, index) => {
                const { img } = item;
                return (
                  <Carousel.Item key={index} style={{height: "380px"}}>
                    <Image
                      src={img}
                      width={0}
                      height={0}
                      alt="Image"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                );
              })}
            
            </Carousel>

            <Btn style={{zIndex: "999"}}>
              <button>Shop Now</button>
            </Btn>
          </Card>
        </CardArea>
        <Grid>
          <TitleDiv>
            <h3>Food Stuff</h3>
          </TitleDiv>

          <ImgBx>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/lenovo.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Image
                src="/pins/AirpodsMax.jpeg"
                width={0}
                height={0}
                alt="Image"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                  position: "relative",
                }}
              />
              <Btn>
                <button>View More</button>
              </Btn>
            </Box>
          </ImgBx>
        </Grid>
      </ContentBox>
    </Container>
  );
}

export default Kids

const Container = styled.div`
margin-top: 30px;
  padding: 10px;
  background: #3c020274;
`;
const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 1300px) {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;
const Grid = styled.div`
/* width: 350px; */
display: flex;
flex-direction: column;
justify-content: center;

`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 30px;
    font-family: "Inter" sans-serif;
    color: #3c0202;
    font-weight: bold;
    @media (max-width: 416px) {
      font-size: 24px;
    }
  }
`;
const Box = styled.div`
  width: 150px;

  border-radius: 16px;
  backdrop-filter: blur(20px);
  padding: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #43455432;
`;
const ImgBx = styled.div`
gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const CardArea = styled.div`

`;
const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  padding: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #43455432;
  @media (max-width: 416px) {
    width: 100%;
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 16px;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: #0000009c;
  button {
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    background: #fff;
    padding: 4px 6px;
    border: none;
    border-radius: 10px;
    &:hover {
      background: #3c0202;
      color: var(--base-color-dark, #fff);
    }
  }
`;