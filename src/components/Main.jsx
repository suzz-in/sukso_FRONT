import React, { useEffect } from "react";
import styled from "styled-components";
import { getPostList } from "../redux/slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const goDetailButton = () => {};

  const postList = useSelector((state) => state.post.post);
  console.log(postList);

  return (
    <ContanDiv>
      {postList &&
        postList.map((post) => {
          return (
            <Stdiv key={post.postId}>
              <Stimg src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
              <h3> {post.title}</h3>
              <button onClick={goDetailButton}>상세보기</button>
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
