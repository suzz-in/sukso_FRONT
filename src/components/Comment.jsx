import React, { useEffect } from "react";
import styled from "styled-components";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getComment } from "../redux/slice/commentSlice";

const Comment = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment());
  }, []);
  const commentList = useSelector((state) => state.comment.comment);
  console.log(commentList);
  return (
    <Container>
      <CommentListContainer>
        <span>
          {/* {commentList[0].userName} : {commentList[0].comment} */}
        </span>
        <div>
          <IconButton>
            <BsPencil size="20" color="white" />
          </IconButton>
          <IconButton>
            <BsTrash size="20" color="white" />
          </IconButton>
        </div>
      </CommentListContainer>
      <ListLine />
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  width: 60%;
  margin: 20px;
`;

const CommentListContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
