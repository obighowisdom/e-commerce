import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Categories } from "../Menu/categoryMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TopNav = () => {
  const [displayCategory, setDisplayCategory] = useState(false);
  const [showNav, setShowNav] = useState(false)
    
  return (
    <TopDiv>
      <Section>
        <SectionOne></SectionOne>
        <SectionTwo>
          <Hamburger onClick={() => setShowNav(!showNav)}>
            <MoreVertIcon />
          </Hamburger>
          <ImageBox>
            <Image src="/logos/purple.png" width={70} height={70} alt="logo" />
          </ImageBox>
          <MenuBox>
            <Menus style={{ left: showNav ? "0" : "" }}>
              <CatDiv>
                <CatBox
                  style={{ cursor: "pointer" }}
                  onClick={() => setDisplayCategory(!displayCategory)}
                >
                  <Text>Category</Text>
                  <Drop>
                    <ArrowDropUpIcon
                      style={{ display: displayCategory ? "block" : "none" }}
                    />
                    <ArrowDropDownIcon
                      style={{ display: displayCategory ? "none" : "block" }}
                    />
                  </Drop>
                </CatBox>

                <Category
                  style={{
                    display: displayCategory === true ? "block" : "none",
                  }}
                >
                  {Categories.map((item, index) => {
                    const { url, name } = item;
                    return (
                      <Menu key={index}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#3c0202",
                            fontSize: "14px",
                          }}
                          href={url}
                        >
                          {name}
                        </Link>
                      </Menu>
                    );
                  })}
                </Category>
              </CatDiv>

              <Menu>Trending</Menu>
              <Menu>New Arrival</Menu>
              <Menu>Blogs</Menu>
              <Menu>Flash Sales </Menu>
            </Menus>
          </MenuBox>

          <Icons>
            <SearchBox>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fade
                style={{ cursor: "pointer", color: "purple" }}
              />
            </SearchBox>

            <Badge
              badgeContent={"0"}
              color="primary"
              style={{ cursor: "pointer" }}
            >
              <ShoppingCartCheckoutIcon color="purple" />
            </Badge>
            <Badge
              badgeContent={"0"}
              color="warning"
              style={{ cursor: "pointer" }}
            >
              <NotificationsActiveIcon color="purple" />
            </Badge>
            <Login>
              <PersonIcon style={{ cursor: "pointer" }} />
            </Login>
          </Icons>
        </SectionTwo>
      </Section>
    </TopDiv>
  );
};

export default TopNav;

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
  background-color: #ff7f50b4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  right: 0%;
  top: 0%;
  @media (max-width: 1040px) {
    justify-content: space-around
  }
`;
const ImageBox = styled.div`
  @media (max-width: 700px) {
    margin-left: 70px;
  }
`;
const MenuBox = styled.div`
  
`
const Menus = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 700px) {
    /* display: none; */
    backdrop-filter: blur(5px);
    position: absolute;
    top: 100%;
    background: #ff7f50;
    width: 230px;
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
const ArrowBox = styled.div`
  
`
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
    &:hover{
      background-color: purple;
      border-radius: 25px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  /* padding-right: 30px; */
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
  color: var(--base-color-dark, #3c0202);
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
  color: var(--base-color-dark, #3c0202);
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

