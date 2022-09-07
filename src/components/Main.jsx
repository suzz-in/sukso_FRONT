import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { getPostList } from "../redux/slice/postSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const [postList, setPostList] = useState([]);
  const [postHeart, setPostHeart] = useState(false);

  const getPostList = async () => {
    const { data } = await axios.get("http://localhost:3001/post");
    //15.165.76.244/
    setPostList(data);
  };

  const heartClicked = async (payload) => {
    const { data } = await axios.patch(
      `http://localhost:3001/post/${payload.postId}`,
      { heartOn: !payload.heartOn }
    );
    return data;
  };

  const navigate = useNavigate();

  useEffect(() => {
    getPostList();
  }, []);

  const goDetailButton = (postId) => {
    navigate(`/detail/${postId}`);
  };

  const likeToggleButton = (post) => {
    console.log(post);
    if (post.heartOn) {
      setPostHeart(false);
    } else {
      setPostHeart(true);
    }
  };
  return (
    <ContanDiv>
      {/* postList값 true인 경우 map이 실행되도록 설정  */}
      {postList?.map((post) => {
        return (
          <Stdiv key={post.postId}>
            <Stimg src={post.imageUrl} />
            <HeartContainer
              onClick={() => {
                likeToggleButton(post);
              }}
            >
              {postHeart ? (
                <AiFillHeart
                  onClick={() => heartClicked(post)}
                  color="red"
                  size="30px"
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => heartClicked(post)}
                  color="red"
                  size="30px"
                />
              )}

              <HeartCount>{post.heartNum}</HeartCount>
            </HeartContainer>
            <h3> {post.title}</h3>
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
