import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Input from "../elements/Input";
import Comment from "./Comment";

const Detail = () => {
  const [heart, setHeart] = useState(false);
  const heartClick = () => {
    setHeart(!heart);
  };
  return (
    <Container>
      <h1>숙소명</h1>
      <div>
        <img src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2020/12/geoje-main.jpg?resize=740%2C444&ssl=1" />
        <HeartContainer onClick={heartClick}>
          {heart ? (
            <AiFillHeart color="red" size="30px" />
          ) : (
            <AiOutlineHeart color="red" size="30px" />
          )}
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
  justify-content: flex-end;
`;
