import React, { useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addCommentList } from "../redux/slice/commentSlice";
import { useDispatch } from "react-redux";

const Input = () => {
  const comment = useRef(null);
  const dispatch = useDispatch();

  // 댓글 추가
  const AddComment = () => {
    const data = {
      commentId: uuidv4(),
      content: comment.current.value,
    };
    if (comment.current.value < 1) {
      alert("내용을 입력해 주세요");
    } else {
      dispatch(addCommentList(data));
      comment.current.value = " ";
    }
  };

  return (
    <CommentFormStyle>
      <div>
        <CommentInputStyle type="text" ref={comment} />
        <AddCommentButtonStyle onClick={AddComment}>
          추가하기!
        </AddCommentButtonStyle>
      </div>
    </CommentFormStyle>
  );
};
export default Input;

const CommentFormStyle = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
