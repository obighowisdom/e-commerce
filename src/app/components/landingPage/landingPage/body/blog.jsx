import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { Posts } from "@/app/components/Data/blogData";


const Blog = () => {
  return (
      <Container>
          <Title>
              <TitleText>
                  Our Blog
              </TitleText>
          </Title>
          <CardBox>
              {Posts.map((post) => {
                  const {id, img, title, date, comment, body} = post
                  return (
                    <Card key={id}>
                      <ImgCard>
                        <Image
                          src={img}
                          width={0}
                          height={0}
                          alt="Image"
                          sizes="100vw"
                          style={{ width: "100%", height: "100%" }} // optional
                        />
                      </ImgCard>
                      <TextDiv>
                              <BlogTitle>{title}</BlogTitle>
                        <Date>
                          <CgCalendarDates
                            size={20}
                            style={{ color: "purple" }}
                          />
                          <Text>
                                      <i>{date}</i> <i> / </i>
                          </Text>
                          <Comment>
                            {" "}
                                      <i>{comment}</i>
                          </Comment>
                        </Date>
                        <BlogText>
                          {body}
                        </BlogText>
                      </TextDiv>
                    </Card>
                  );
              })}
        
      </CardBox>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
display: flex;
align-items: center;
  padding: 10px;
  background-color: #3c0202;
`;
const TitleText = styled.h5`
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CardBox = styled.div`
display: flex;
gap: 10px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
  /* border: 1px solid blue; */
`;
const ImgCard = styled.div`
  height: 50%;
`;

const TextDiv = styled.div`
  height: 50%;
  margin-top: 20px;
`;
const BlogTitle = styled.div`
  color: var(--base-color-dark, #1c1c1c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
const Date = styled.div`
  display: flex;
  margin-top: 13px;
  /* margin-bottom: 13px; */

  /* align-items: center; */
`;
const Text = styled.p`
  font-style: italic;
  color: var(--base-color-dark, coral);
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 3px;
  margin-right: 3px;
`;
const Comment = styled.p`
  font-style: italic;
  color: var(--base-color-dark, purple);
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BlogText = styled.p`
  color: var(--base-color-dark, gray);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
