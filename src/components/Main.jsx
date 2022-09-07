import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getPostList } from "../redux/slice/postSlice";
import { getPostLike } from "../redux/slice/postLikeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const postList = useSelector((state) => state?.post.post);
  console.log(postList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const goDetailButton = (postId) => {
    navigate(`/detail/${postId}`);
  };
  const likeToggleButton = (postId) => {
    dispatch(getPostLike(postId));
  };

  return (
    <ContanDiv>
      {/* postList값 true인 경우 map이 실행되도록 설정  */}
      {postList &&
        postList.map((post) => {
          console.log(postList);
          return (
            <Stdiv key={post.postId}>
              <Stimg src={post.imageUrl} />
              <HeartContainer
                onClick={() => {
                  likeToggleButton(post.postId);
                }}
              >
                {post.heartOn ? (
                  <AiFillHeart color="red" size="30px" />
                ) : (
                  <AiOutlineHeart color="red" size="30px" />
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
