"use client";
import { styled } from "styled-components";
import React from "react";
import Banner from "./components/landingPage/landingPage/banner/banner";
import Header from "./components/landingPage/header";
import BodyArea from "./components/landingPage/landingPage/body/body";
import Footer from "./components/landingPage/footer";
import TopNav from "./components/NavBar/topNav";
import Deals from "./components/landingPage/landingPage/body/deals";
import Promo from "./components/landingPage/landingPage/body/promo";

const HomePage = () => {
  return (
    <>
      <OverAllDiv>
        <TopNav />
        <Banner />
        <BodyBox>
          <Promo />
        </BodyBox>

        <Footer />
      </OverAllDiv>
    </>
  );
};

export default HomePage;

const OverAllDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 5px;
  }
`;
const ContentArea = styled.div`
  /* background: ; */
`;

const BodyBox = styled.div`
/* position: relative; */
background-color: red;
 padding: 20px;
 width: 100%;
`