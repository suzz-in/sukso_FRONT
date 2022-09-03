import React from "react";
import styled from "styled-components";
import { BsTrash, BsPencil } from "react-icons/bs";

const Comment = () => {
  return (
    <div>
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
