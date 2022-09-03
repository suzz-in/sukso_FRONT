import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");

  return (
    <div>
      <h1>로고</h1>
      <LoginContainer>
        <label htmlFor="id"></label>
        <LoginInput
          onChange={(e) => setId(e.target.value)}
          id="id"
          type="text"
          placeholder="아이디"
        />
        <label htmlFor="pw"></label>
        <LoginInput
          onChange={(e) => setPW(e.target.value)}
          pw="pw"
          type="text"
          placeholder="비밀번호"
        />
        <LoginButton>로그인</LoginButton>
        <LoginButton>회원가입</LoginButton>
      </LoginContainer>
    </div>
  );
};
export default Login;

const LoginContainer = styled.div`
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px;
`;

const LoginInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  height: 40px;
  width: 50%;
  padding: 0;
  margin-bottom: 8px;
  text-align: left;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
  height: 40px;
  padding: 0;
  margin-bottom: 8px;
  display: block;
  width: 50%;
  text-align: center;
`;
