import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <HeaderDiv>
        <TopSection>
          <TopDiv>
            <LogoDiv>
              <Image src="/logo/logo.png" width={77} height={21} alt="logo" />
            </LogoDiv>
            <SearchArea>
              <SearchDiv>
                <Input type="text" />
                <FontAwesomeIcon
                  style={{ color: "gray" }}
                  icon={faMagnifyingGlass}
                />
                <Select>
                  <select name="" id="">
                    <option value="AllCategory">All Category</option>
                  </select>
                </Select>
              </SearchDiv>
            </SearchArea>
            <Tabs>
              <IconDiv>
                <FontAwesomeIcon
                  style={{ color: "gray" }}
                  icon={faCartShopping}
                />
              </IconDiv>
              <IconDiv>
                <FontAwesomeIcon style={{ color: "gray" }} icon={faUser} />
              </IconDiv>
              <IconDiv>
                <FontAwesomeIcon style={{ color: "gray" }} icon={faBell} />
              </IconDiv>
            </Tabs>
          </TopDiv>
        </TopSection>
        <SubSection></SubSection>
      </HeaderDiv>
    </>
  );
};

export default Header;

const HeaderDiv = styled.div`
  box-shadow: 0px 1px 0px 0px #e4e8ee;
  /* background-color: #3b033b69; */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
 
 
`;
const TopSection = styled.div``;
const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SearchDiv = styled.div`
  display: flex;
  border: 1px solid blue;
  align-items: center;
  border-radius: 8px;
  padding: 7px;
`;
const Select = styled.div`
  margin-left: 20px;
  height: 100%;
  border-left: 1px solid coral;
  width: 130px;
  display: flex;
  justify-content: center;
  select {
    background: none;
    border: none;
    color: gray;
    font-family: "Inter" sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }
`;

const Search = styled.button`
  border-radius: 5px;
  padding-left: 3px;
  padding-right: 3px;

  height: 100%;
  margin: 0 auto;
  border: none;
  background: red;
  color: var(--white, #fff);
  text-align: center;
  font-family: "Inter" sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Input = styled.input`
background: none;
  width: 500px;
  border: none;
  padding: 3px;
  color: var(--gray-500, #8b96a5);
  font-family: "Inter" sans-serif;
  outline: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LogoDiv = styled.div``;
const SearchArea = styled.div``;
const Tabs = styled.div`
  margin-top: 0px;
  display: flex;
  align-items: center;
  gap: 22px;
`;
const SubSection = styled.div``;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;


