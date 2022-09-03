import React from "react";
import styled from "styled-components";


function Main() {
  return (
    <>
    <ContanDiv>
    <Stdiv>
        <Stimg src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
        <h3> 감성 숙소 !</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>


    <Stdiv>
        <Stimg src="https://t1.daumcdn.net/cfile/tistory/999E92465D32A2052A" />
        <h3>강릉 세인트존스호텔</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>

    <Stdiv>
        <Stimg src="https://t1.daumcdn.net/cfile/tistory/999E92465D32A2052A" />
        <h3>강릉 세인트존스호텔</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>


    </ContanDiv>

    <ContanDiv>
    <Stdiv>
        <Stimg src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
        <h3> 감성 숙소 !</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>


    <Stdiv>
        <Stimg src="https://t1.daumcdn.net/cfile/tistory/999E92465D32A2052A" />
        <h3>강릉 세인트존스호텔</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>

    <Stdiv>
        <Stimg src="https://t1.daumcdn.net/cfile/tistory/999E92465D32A2052A" />
        <h3>강릉 세인트존스호텔</h3>
        <p>뷰가 농협은행...</p>
        <button>상세보기</button>
    </Stdiv>


    </ContanDiv>
    </>
  );
}

export default Main;

const ContanDiv = styled.div`
display: flex;
margin-top: 40px;
margin-bottom: 40px;
text-align: center;
margin-left: 80px;
`
const Stimg = styled.img`
height: 180px;
width: 286px;
display: block;
`
const Stdiv = styled.div`
margin : 50px;
border: solid;
border-radius: 5px;
&:button {
    margin : 10px;
}
`