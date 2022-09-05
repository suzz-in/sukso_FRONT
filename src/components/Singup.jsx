import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {


  const navigate = useNavigate();
  const [submited, setSubmitted] = useState(false);

  const [inputs, setInputs] = useState({ //보내줄때는 member,nickname,password 로 보내주자 
    userId : "",
    nickname : "",
    password : "",
    passwordConfirm : "",
  })

  const {userId, nickname, password, passwordConfirm}= inputs;

  const onChangeHandler = (e) =>{
    const { value, name }= e.target;
    setInputs({...inputs, [name]:value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    let reg1 = /^[A-Za-z0-9]{5,12}$/;
    //대문자,소문자,0-9까지 5자리에서 12자리
    let reg2 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
    //최소8자 이상, 20자 이하  영 대문자, 영 소문자, 숫자, 특수문자 각각 최소 1개 이상


    //아이디충족x,비밀번호충족x,비번-비번확인 다를때,한칸이라도 입력안했을때
    if(!reg1.test(userId)){ //reg1에 충족하지 않는(!) userid입력 시 
      alert("아이디는 영문 대소문자와 숫자 5~12자리로 입력해야 합니다.")
      setInputs({
        userId: "", //id는 빈값으로 
      })
      return;
    }
    if(!reg2.test(password)){ //reg2에 충족하지 않는(!) password입력 시
      alert("비밀번호는 최소 특수문자 하나, 숫자 하나를 포함하여 대소문자와 숫자로 8~20자리를 입력해야 합니다.")
      setInputs({
        password:"",  //password는 빈값으로
      })
      return ;
    }
    if(password !== passwordConfirm){ //비밀번호 비밀번호확인 다를 때
      alert("비밀번호가 일치하지 않습니다.")
      setInputs({
        password: "",
        passwordConfirm: "",
      })
      return;
    } // 하나라도 입력 안했을 때
    if(userId==="" ||
       nickname==="" ||
       password==="" ||
       passwordConfirm===""){
        alert("아이디, 패스워드, 닉네임을 모두 입력해주세요.")
        return;
       } else { //위4가지 상황 아닐때 axios이용해서 데이터 보내주기
        try {
          await axios.post("https://a358bdec-994d-43d3-9c5d-094e23523748.mock.pstmn.io",{
            member : inputs.userId,
            nickname : inputs.nickname,
            password : inputs.password
          })
          setSubmitted(true)// useState로 전달
        } catch (error){ //에러 시에 얼럿창
          alert("회원가입 실패 ! 회원가입 양식에 맞게 입력해주세요.")
        }
       }
  }

  const twiceCheckHandler = (e) => {
    e.preventDefault();
    const memberCheck = {
      userId : inputs.userId
    }
    console.log("체크체크",memberCheck)
  }
  if(submited===true){
    console.log("회원가입 완!")
    return navigate('/')
  }

 


  return (
    <div>
      <h3>회원가입</h3>
      <LoginContainer>
        <LoginLabel htmlFor="id">아이디 *</LoginLabel>
        <LoginInput 
        name="userId" 
        type="text"
        value={userId}
        onChange={onChangeHandler} 
        placeholder="아이디를 입력해주세요" />

        <LoginLabel htmlFor="nickname">닉네임 *</LoginLabel>
        <LoginInput
          name="nickname"
          type="text"
          value={nickname}
          onChange={onChangeHandler}
          placeholder="닉네임을 입력해주세요"
        />
        <LoginLabel htmlFor="pw">비밀번호 *</LoginLabel>
        <LoginInput 
        name="password" 
        type="password" 
        value={password}
        onChange={onChangeHandler}
        placeholder="비밀번호를 입력해주세요" />
        
        
        <LoginLabel htmlFor="pwcheck">비밀번호 확인 *</LoginLabel>
        <LoginInput
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={onChangeHandler}
          placeholder="비밀번호를 입력해주세요"
        />
        <LoginButton onClick={submitHandler}>가입완료</LoginButton>
      </LoginContainer>
    </div>
  );
};
export default Signup;

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