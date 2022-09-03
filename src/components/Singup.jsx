import React from "react";
import styled from "styled-components";

const Singup = () => {
  return (
    <div>
      <h1>로고</h1>
      <h3>회원가입</h3>
      <LoginContainer>
        <LoginLabel htmlFor="id">아이디 *</LoginLabel>
        <LoginInput id="id" type="text" placeholder="아이디를 입력해주세요" />

        <LoginLabel htmlFor="nickname">닉네임 *</LoginLabel>
        <LoginInput
          pw="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        <LoginLabel htmlFor="pw">비밀번호 *</LoginLabel>
        <LoginInput pw="pw" type="text" placeholder="비밀번호를 입력해주세요" />
        <LoginLabel htmlFor="pwcheck">비밀번호 확인 *</LoginLabel>
        <LoginInput
          pw="pwcheck"
          type="text"
          placeholder="비밀번호를 입력해주세요"
        />
        <LoginButton>가입완료</LoginButton>
      </LoginContainer>
    </div>
  );
};
export default Singup;

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

const LoginLabel = styled.label`
  text-align: left;
  color: gray;
  font-size: 14px;
  display: block;
  text-align: left;
`;
