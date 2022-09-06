import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
//   const [navigates, Setnavigates] = useState(false);
  const navigate = useNavigate();


  const onChange1= (e) => {
    setId(e.target.value)
  }

  const onChange2 = (e) => {
    setPassword(e.target.value)
  }

  const sendRequestLogin = async (e) => {
    e.preventDefault();
    let reg1 = /^[A-Za-z0-9]{5,12}$/;
    //대문자,소문자,0-9까지 5자리에서 12자리
    let reg2 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
    //최소8자 이상, 20자 이하  영 대문자, 영 소문자, 숫자, 특수문자 각각 최소 1개 이상
    if( id === "" || password === ""){
        alert("아이디와 비밀번호를 정확히 입력해주세요")
    }
    if (!reg1.test(id)){
        alert("아이디는 영문 대소문자와 숫자 5~12자리로 입력해야 합니다.")
    }
    if (!reg2.test(password)){
        alert("비밀번호는 최소 특수문자 하나, 숫자 하나를 포함하여 대소문자와 숫자로 8~20자리를 입력해야 합니다.")
    }
    try{
        const response = await axios.post("login", {
            id:id,
            password:password,
        }, {withCredentials:true}) //수동으로 CORS 요청에 쿠기값 넣어줌
       localStorage.setItem("Authorization",response.data.data.Authorization)
       navigate("/")
    } catch(error) {
        alert("아이디와 비밀번호를 확인해주세요.")

        console.log(error)
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("Authorization") !==null){
        return navigate("/")
    }
  },[])

  return (
    <div>
      <LoginContainer>
        <label htmlFor="id"></label>
        <LoginInput
          value={id}
          onChange={onChange1}
          type="text"
          placeholder="아이디"
          pattern='^[A-Za-z0-9]{5,12}$'
        />
        <label htmlFor="pw"></label>
        <LoginInput
          value={password}
          onChange={onChange2}
          type="text"
          placeholder="비밀번호"
          pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$`}
        />
        <LoginButton type="submit" onClick={sendRequestLogin} >로그인</LoginButton>
        <Link to='/signup'><LoginButton >회원가입</LoginButton></Link>
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