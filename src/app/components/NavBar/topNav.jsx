import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TopNav = () => {
  const [displayCategory, setDisplayCategory] = useState(false);
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
              <PersonIcon sx={{ color: "white" }} />
            </Login>
          </Icons>
        </SectionTwo>
      </Section>
    </TopDiv>
  );
};

export default TopNav;

const Box = styled.div`
  display: flex;
  width: 800px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 10px;

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
  background-color: #1c1c1c;
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
const MenuBox = styled.div``;
const Menus = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 700px) {
    /* display: none; */
    backdrop-filter: blur(5px);
    background-color: #1c1c1c;
    position: absolute;
    top: 100%;
    width: 100%;
    left: 3000%;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    padding-top: 10px;
    height: 100vh;
    margin-top: 0px;
  }
`;
const Login = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
const ArrowBox = styled.div``;
const SearchBox = styled.div`
  display: flex;
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
const Search = styled.div`
  border-bottom: 1px solid #fff;
  /* background-color: #fff ; */
  /* border-radius: 15px; */
`;

const Input = styled.input`
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  background: none;
  outline: none;
  border: none;
`;
const CatDiv = styled.div``;
const Category = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
  height: fit-content;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  z-index: 1000;
`;
const CatBox = styled.div`
  margin: 0 auto;
  display: flex;
  /* align-items: center; */
`;
const Text = styled.p`
  cursor: pointer;
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  &:hover {
    color: purple;
  }
`;
const Drop = styled.div`
  width: 100%;
  height: 100%;
`;
const Menu = styled.p`
  cursor: pointer;
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  &:hover {
    color: purple;
  }
`;
