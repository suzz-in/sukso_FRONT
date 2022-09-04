import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const userName = useRef(null);
  const comment = useRef(null);

  const data = {
    id: uuidv4,
    userName: userName.current,
    comment: comment.current,
  };

  const AddCommentButton = () => {
    console.log(data);

    userName.current.value = "";
    comment.current.value = "";
  };

  return (
    <CommentFormStyle>
      <CommentInputStyle type="text" ref={userName} />
      <CommentInputStyle type="text" ref={comment} />
      <AddCommentButtonStyle onClick={AddCommentButton}>
        추가하기!
      </AddCommentButtonStyle>
    </CommentFormStyle>
  );
};
export default Input;

const CommentFormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 60%;
`;

const CommentInputStyle = styled.input`
  border-radius: 10px;
  border: 2px solid pink;
  margin: 20px 5px;
  padding: 10px;
`;

const AddCommentButtonStyle = styled.button`
  border-radius: 10px;
  border: 2px solid pink;
  margin: 20px 5px;
  padding: 10px;
  background-color: pink;
  color: white;
  font-weight: bold;
`;
