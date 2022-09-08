import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { getPostList } from "../redux/slice/postSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { token } from "../api/index";

function Main() {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    const { data } = await axios.get("http://15.165.76.244/post");
    //15.165.76.244/
    setPostList(data.data);
  };

  const heartClicked = async (postId) => {
    const idx = postList.findIndex((post) => post.id === postId);
    console.log(idx);
    const { data } = await token.post(`/heart/post/${postId}`, {
      heartOn: !postList[idx].heartOn,
    });
    if (data.success) {
      setPostList(
        postList.map((item) =>
          item.id === idx
            ? {
                ...item,
                heartNum: item.heartOn ? item.heartNum - 1 : item.heartNum + 1,
                heartOn: !item.heartOn,
              }
            : item
        )
      );
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getPostList();
  }, []);

  const goDetailButton = (postId) => {
    navigate(`/detail/${postId}`);
  };

  return (
    <ContanDiv>
      {/* postList값 true인 경우 map이 실행되도록 설정  */}
      {postList?.map((post) => {
        return (
          <Stdiv key={post.id}>
            <Stimg src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDlfMjg4%2FMDAxNjIwNTU5MzkzOTMw.eeWcSZEPFXvv0Q7ocsPzII0BcdGuSoafVegAU_cdvL0g.JGILoEqkOTx56sAE2M8KF9mcLaR6DIImsPARAOiJ8_wg.JPEG.tkdbsdhkdwk%2FIMG_4522.jpg&type=sc960_832" />
            <HeartContainer
              onClick={() => {
                heartClicked(post.id);
              }}
            >
              {post.heartOn ? (
                <AiFillHeart color="red" size="30px" />
              ) : (
                <AiOutlineHeart color="red" size="30px" />
              )}

              <HeartCount>{post.heartNum}</HeartCount>
            </HeartContainer>
            <h3> 사인웨이브</h3>
            <button
              onClick={() => {
                goDetailButton(post.postId);
              }}
            >
              상세보기
            </button>
          </Stdiv>
        );
      })}
    </ContanDiv>
  );
}

export default Main;

const ContanDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  margin-left: 80px;
`;
const Stimg = styled.img`
  height: 180px;
  width: 286px;
  display: block;
`;
const Stdiv = styled.div`
  margin: 50px;
  border: solid;
  border-radius: 5px;
  border-color: #87ceeb;
`;
const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const HeartCount = styled.span`
  margin: 0;
  padding: 0 5px;
`;
