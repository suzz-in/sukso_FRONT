import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Input from "../elements/Input";
import Comment from "./Comment";
import { getLikeCount, postLikeCount } from "../redux/slice/likeSlice";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const likecount = useSelector((state) => state.like.likeList);

  useEffect(() => {
    dispatch(getLikeCount());
    console.log(dispatch(getLikeCount()));
  }, []);
  const heartClick = () => {
    if (likecount.liked) {
      dispatch(postLikeCount({ count: likecount.count - 1, liked: false }));
    } else {
      dispatch(postLikeCount({ count: likecount.count + 1, liked: true }));
    }
  };

  return (
    <Container>
      <h1>숙소명</h1>
      <div>
        <img src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
        <HeartContainer onClick={heartClick}>
          {likecount.liked ? (
            <AiFillHeart color="red" size="30px" />
          ) : (
            <AiOutlineHeart color="red" size="30px" />
          )}
          <HeartCount>{likecount.count}</HeartCount>
        </HeartContainer>
      </div>
      <Input />
      <Comment />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
