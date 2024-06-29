import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/Ai";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <FooterContent>
      <Box>
        <Card>
          <CardTitle>
            <h4>Quick Links</h4>
          </CardTitle>
          <CardBody>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> About </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Service </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Delivery Information </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Privacy Policy </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Terms & Condition </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Return Policy </Text>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>
            <h4>My Account</h4>
          </CardTitle>
          <CardBody>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> My Account </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Cart </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Checkout </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Wishlist </Text>
            </Link>
            <Link style={{ textDecoration: "none" }} href="#" path="/">
              <Text> Contact </Text>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>
            <h4>Address</h4>
            <Address>
              <BsFillHouseFill />
              <Text style={{ marginLeft: "5px" }}>
                No 1 Gideon Street Emaudo Ekpoma Edo State, Nigeria{" "}
              </Text>
            </Address>
            <Address>
              <BiSolidPhoneCall />
              <Text style={{ marginLeft: "5px" }}>+234 567 8901 </Text>
            </Address>
            <Address>
              <AiOutlineMail />
              <Text style={{ marginLeft: "5px" }}>
                aramenkhosewisdom@gmail.com{" "}
              </Text>
            </Address>
            <Address>
              <InputDiv>
                <Input type="email" placeholder="Newsletter" />
                <Submit>Subscribe</Submit>
              </InputDiv>
            </Address>
            <Payment></Payment>
          </CardTitle>
          <CardBody></CardBody>
        </Card>
      </Box>
      <CopyRight>Copyright © Company Name 2023 All Right Reserved.</CopyRight>
    </FooterContent>
  );
};

export default Footer;

const FooterContent = styled.div`
  background: #000;
  padding: 25px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;
const Card = styled.div``;
const CardTitle = styled.div`
  h4 {
    color: var(--base-color-dark, purple);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* align-items: center; */
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;
const Text = styled.p`
  text-decoration: none;
  color: var(--base-color-dark, gray);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    color: var(--base-color-dark, #1c1c1c);
  }
`;

const Address = styled.div`
  display: flex;
`;

const InputDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 8px 12px;
  background-color: #ffceee;
  border-radius: 15px;
  @media (max-width: 1000px) {
    display: flex;
        padding: 0px;
    
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  color: var(--base-color-dark, gray);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 100%;
  background: none;
`;
const Submit = styled.button`
  border: none;
  color: var(--base-color-dark, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 100%;
  background: #1c1c1c;
  border-radius: 10px;
  padding: 6px;
`;

const Payment = styled.div`
  display: flex;
`;
const CopyRight = styled.p`
margin-top: 25px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #fff;
`;
