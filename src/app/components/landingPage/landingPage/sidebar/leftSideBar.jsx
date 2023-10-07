import React from 'react'
import styled from 'styled-components'
const LeftSideBar = () => {
  return (
    <>
      <ContentBox>
        <ContentArea>
          <BannerCategories>
            <Category>Automobiles</Category>
            <Category>Cloths and Wears</Category>
            <Category>Home Interior</Category>
            <Category>Computer and Tech</Category>
            <Category>Tools, Equipment</Category>
            <Category>Sports and Outdoors</Category>
            <Category>Animal and pets</Category>
            <Category>Machinary tools</Category>
          </BannerCategories>
        </ContentArea>
      </ContentBox>
    </>
  );
}

export default LeftSideBar

const ContentBox = styled.div`
    

`
const ContentArea = styled.div`
    

`

const BannerCategories = styled.div`
  width: 250px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.p`
  color: var(--gray-600, #505050);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 5px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(-3px -3px 2px rgba(255, 255, 255, 0.3))
      drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
      drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));
  }
`;