import React from "react";
import styled from "styled-components";
import { BsTrash, BsPencil } from "react-icons/bs";

const Comment = () => {
  return (
    <div>
      <CommentFormStyle>
        <CommentInputStyle type="text" />
        <CommentInputStyle type="text" />
        <AddCommentButtonStyle>추가하기!</AddCommentButtonStyle>
      </CommentFormStyle>
      <CommentListStyle>
        <span>나나낭 : 도토리수집</span>
        <div>
          <IconButton>
            <BsPencil size="20" color="white" />
          </IconButton>
          <IconButton>
            <BsTrash size="20" color="white" />
          </IconButton>
        </div>
      </CommentListStyle>
      <ListLine />
    </div>
  );
};

export default Comment;

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
const CommentListStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconButton = styled.button`
  border-radius: 10px;
  padding: 5px 5px;
  border: 0;
  background-color: pink;
  margin-right: 5px;
`;

const ListLine = styled.hr`
  border: 1px solid pink;
`;
