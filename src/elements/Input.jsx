import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <CommentFormStyle>
      <CommentInputStyle type="text" />
      <CommentInputStyle type="text" />
      <AddCommentButtonStyle>추가하기!</AddCommentButtonStyle>
    </CommentFormStyle>
  );
};
export default Input;

const CommentFormStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
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
