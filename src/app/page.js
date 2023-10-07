"use client";
import { styled } from "styled-components";
import React from "react";
import Banner from "./components/landingPage/landingPage/banner/banner";
import Header from "./components/landingPage/header";
import BodyArea from "./components/landingPage/landingPage/body/body";


const HomePage = () => {
  return (
    <>
      <OverAllDiv>
        <Header />
        <Banner />
        <BodyArea/>
      </OverAllDiv>
    </>
  );
};

export default HomePage;

const OverAllDiv = styled.div`
  background: var(--gray-100, #f7fafc);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* align-items: center; */
  /* justify-content: center; */
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
`;