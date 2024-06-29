"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <Container>
      <Box>
        <Form>
          <Title>Sign in</Title>
          <Desc>
            <h2>Welcome Back</h2>{" "}
            <p>
              Enter Your Email and Password <br /> to Continue
            </p>
          </Desc>
          <FormField>
            <InputBox>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </InputBox>
            <InputBox>
              <label htmlFor="pwd">Password</label>
              <input id="pwd" type="password" />
            </InputBox>
            <SubmitBtn>Login</SubmitBtn>
          </FormField>
          <Forgot>
            {" "}
            <p>Don't have an account?</p> <Link href="/register">Sign Up</Link>
          </Forgot>
          <Or>OR</Or>
          <Google>
            <Image src="/logo/google.png" alt="logo" width={50} height={30} />
            <p>Sign in with Google</p>
          </Google>
        </Form>
      </Box>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background-image: url("/image/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
const Box = styled.div`
  background-color: #0000008f;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.div`
  background-color: #ffffff5f;
  padding: 15px;
  border-radius: 10px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 10px;
  }
`;
const Title = styled.h2`
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  text-align: center;
  color: #3c0202;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  h2 {
    color: var(--base-color-dark, #8d0404);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0;
  }
  p {
    color: var(--base-color-dark, #000);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-align: center;
  }
`;
const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const InputBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  label {
    width: 100px;
    color: var(--base-color-dark, #8d0404);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
  input {
    color: var(--base-color-dark, #000);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    background: none;
    width: 100%;
  }
`;

const SubmitBtn = styled.button`
  border-radius: 10px;
  padding: 12px;
  background-color: #000;
  border: none;
  color: var(--base-color-dark, #8d0404);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  &:hover {
    background-color: #fff;
  }
`;
const Forgot = styled.div`
  display: flex;
  justify-content: center;
  gap: 3px;
  margin-top: 8px;
  p {
    color: var(--base-color-dark, #000);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
  }
  a {
    color: var(--base-color-dark, #8d0404);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-decoration: none;
  }
`;
const Or = styled.p`
  margin: none;
  text-align: center;
  color: var(--base-color-dark, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter" sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
const Google = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: var(--base-color-dark, #fff);
    font-feature-settings: "clig" off, "liga" off;
    font-family: "Inter" sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;
