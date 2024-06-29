"use client";
import { styled } from "styled-components";
import React from "react";
import Banner from "./components/landingPage/landingPage/banner/banner";
import Footer from "./components/landingPage/footer";
import TopNav from "./components/NavBar/topNav";
import Deals from "./components/landingPage/landingPage/body/deals";
import Promo from "./components/landingPage/landingPage/body/promo";
import Products from "./components/landingPage/landingPage/body/products";
import PopularProducts from "./components/landingPage/landingPage/body/popular";
import Flash from "./components/landingPage/landingPage/body/flash";
import ProductCard from "./components/cards/productCard";
import FramerCard from "./components/framer/framer";
import NewBanner from "./components/landingPage/landingPage/banner/newbanner";
import Kids from "./components/landingPage/landingPage/kids/kid";

const HomePage = () => {
  return (
    <>
      <OverAllDiv>
        <TopNav />
        <NewBanner />
        <BodyBox>
          <ProductCard />
          <Deals />
          <Kids />
          <Banner />


          <FramerCard />
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
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    /* padding: 5px; */
  }
`;

const BodyBox = styled.div`
  /* position: relative; */

  background: #3c020274;
  padding: 50px;
  width: 100%;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;
