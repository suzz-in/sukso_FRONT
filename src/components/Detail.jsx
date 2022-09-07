import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Input from "../elements/Input";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [postData, setPostData] = useState();
  const params = useParams();

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/likeList/${params.id}`
    );
    setPostData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(postData);
  const heartClick = () => {
    // console.log(postData);
    if (postData.liked) {
      // dispatch(postpostData({ count: postData.count - 1, liked: false }));
      setPostData((prevState) => {
        return { ...prevState, liked: false, count: prevState.count - 1 };
      });
    } else {
      // dispatch(postpostData({ count: postData.count + 1, liked: true }));
      setPostData((prevState) => {
        return { ...prevState, liked: true, count: prevState.count + 1 };
      });
    }
  };

  return (
    <Container>
      <h1>숙소명</h1>
      <div>
        <img src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
        <HeartContainer onClick={heartClick}>
          {postData?.liked ? (
            <AiFillHeart color="red" size="30px" />
          ) : (
            <AiOutlineHeart color="red" size="30px" />
          )}
          <HeartCount>{postData?.count}</HeartCount>
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
