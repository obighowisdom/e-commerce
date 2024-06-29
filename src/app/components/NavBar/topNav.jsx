"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { SideData } from "../Data/sidedata";
import Router from "next/router";
import Link from "next/link";

const TopNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <TopDiv>
      <Section>
        <SectionOne></SectionOne>
        <SectionTwo>
          <Hamburger onClick={() => setShowNav(!showNav)}>
            <MoreVertIcon sx={{ color: "#fff" }} />
          </Hamburger>
          <ImageBox>
            <Image src="/logos/purple.png" width={70} height={70} alt="logo" />
          </ImageBox>

          <Box>
            <Cat>
              <select name="" id="default">
                <option value="all">All</option>
                <option value="fashion">Fashion</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids </option>
                <option value="phones">Phones & Computer Accessories </option>
              </select>
            </Cat>
            <InputField type="text" placeholder="Searh products" />

            <IconSearch>
              <SearchIcon sx={{ color: "white" }} />
            </IconSearch>
          </Box>

          <Icons>
            <Badge
              badgeContent={"0"}
              color="primary"
              style={{ cursor: "pointer" }}
            >
              <ShoppingCartCheckoutIcon sx={{ color: "white" }} />
            </Badge>
            <Badge
              badgeContent={"0"}
              color="warning"
              style={{ cursor: "pointer" }}
            >
              <NotificationsActiveIcon sx={{ color: "white" }} />
            </Badge>
            <Login>
              <Link href="/login">
                <AccountCircleIcon sx={{ color: "white" }} />
              </Link>
            </Login>
          </Icons>
        </SectionTwo>

        <SideNav
          style={{
            display: showNav === false ? "none" : "block",
            left: showNav === false ? "0" : "",
          }}
        >
          <SideIcon>
            {SideData.map((link, index) => {
              const { icon, name } = link;
              return (
                <MobileIcon key={index}>
                  <div>{icon}</div>
                  <p>{name}</p>
                </MobileIcon>
              );
            })}
          </SideIcon>
        </SideNav>
        <MobileSearch>
          <Col
            style={{
              margin: "10px",
            }}
          >
            <Form.Control type="text" placeholder="Search and hit enter" />
          </Col>
        </MobileSearch>
      </Section>
    </TopDiv>
  );
};

export default TopNav;
const MobileSearch = styled.div`
  transition: 0.5s ease-in-out;
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  opacity: 0;
  @media (max-width: 700px) {
    border-top: 1px solid #fff;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: #000;
  }
`;
const SideNav = styled.div`
  width: 100%;
`;
const SideIcon = styled.div`
  margin-top: 30px;
  background: none;
  position: fixed;
  z-index: 1000;
  margin-top: 70px;
  width: 50%;
  height: 100vh;
  display: none;
  @media (max-width: 700px) {
    transition: 0.5s ease-in-out;
    display: block;
    background: #000;
    padding-left: 10px;
    padding-top: 15px;
  }

  p {
    color: var(--base-color-dark, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
    margin-top: 4px;
    &:hover {
      color: #3c0202;
    }
  }
`;
const MobileIcon = styled.div`
  display: flex;
  margin: auto;
  gap: 10px;
`;

const Box = styled.div`
  display: flex;
  width: 800px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  background-color: #fff;
  @media (max-width: 700px) {
    width: 100%;
    display: none;
  }
  &:hover {
    border: 2px solid coral;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
const Cat = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 50px;

  select {
    border: none;
    outline: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    /* padding: 2px; */
    color: var(--base-color-dark, #3c0202);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    option {
      /* padding: 5px; */
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

      color: var(--base-color-dark, #3c0202);
      font-feature-settings: "clig" off, "liga" off;
      font-family: "Inter" sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
const InputField = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 5px;
  text-align: center;
  color: var(--base-color-dark, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const IconSearch = styled.div`
  background-color: #3c0202;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TopDiv = styled.div`
  height: 100%;
  z-index: 999;
  position: relative;
  right: 0%;
  width: 100%;
`;
const Section = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;
const SectionOne = styled.div``;
const SectionTwo = styled.div`
  backdrop-filter: blur(5px);
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  right: 0%;
  top: 0%;
  @media (max-width: 1040px) {
    justify-content: space-between;
  }
`;
const ImageBox = styled.div`
  @media (max-width: 700px) {
    margin-left: 70px;
  }
`;
const Login = styled.div`
  cursor: pointer;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Hamburger = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: purple;
      border-radius: 25px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  padding-right: 30px;
  gap: 30px;
  align-items: center;
`;
