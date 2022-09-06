import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  getPostList,
  getPostLike,
  UpdatePostLike,
} from "../redux/slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const postList = useSelector((state) => state.post.post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const goDetailButton = (postId) => {
    navigate(`/detail/${postId}`, { state: postList }); // 페이지 이동시 props같이 넘겨주기
  };

  return (
    <ContanDiv>
      {/* postList값 true인 경우 map이 실행되도록 설정  */}
      {postList &&
        postList.map((post) => {
          return (
            <Stdiv key={post.postId}>
              <Stimg src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
              <HeartContainer>
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
