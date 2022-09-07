import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  getCommentList,
  deleteComment,
  updateComment,
} from "../redux/slice/commentSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const patchInput = useRef(null);

  // 처음 렌더시 한번 실행(thunk 호출하여 서버에서 데이터 가져옴 )
  useEffect(() => {
    dispatch(getCommentList());
  }, []);

  const commentList = useSelector((state) => state.comment.comment);

  // 삭제
  const DeleteComment = (id) => {
    dispatch(deleteComment(id));
    dispatch(getCommentList());
    console.log(id);
  };

  const [updateInput, setUpdateInput] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // 수정 버튼 클릭시 수정 인풋창으로 변경
  const setUpInput = (id) => {
    setUpdateInput(true);
    setUpdateId(id);
  };

  // 수정
  const UpdateComment = (data) => {
    dispatch(updateComment(data));
    dispatch(getCommentList());
    setUpdateInput(false);
  };

  return (
    <Container>
      {commentList.map((comment) => {
        return (
          <CommentListContainer key={comment.commentId}>
            <CommentUserName>{comment.userName}</CommentUserName>
            {updateInput && updateId === comment.commentId ? (
              <input
                type="text"
                defaultValue={comment.content}
                ref={patchInput}
              />
            ) : (
              <Commentcontent>{comment.content}</Commentcontent>
            )}
            {updateInput && updateId === comment.commentId ? (
              <IconButton
                onClick={() => {
                  const patchValue = patchInput.current.value;
                  UpdateComment({ comment, patchValue });
                }}
              >
                저장하기
              </IconButton>
            ) : (
              <div>
                <IconButton
                  onClick={() => {
                    setUpInput(comment.commentId);
                  }}
                >
                  <BsPencil size="15" color="white" /> {/* 수정버튼 */}
                </IconButton>
                <IconButton
                  onClick={() => {
                    DeleteComment(comment.commentId); // 삭제할 id 넘겨주기
                  }}
                >
                  <BsTrash size="15" color="white" /> {/* 삭제버튼 */}
                </IconButton>
              </div>
            )}
          </CommentListContainer>
        );
      })}
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CommentListContainer = styled.div`
  width: 150%;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid pink;
  border-radius: 10px;
  padding: 3px 20px;
`;

const IconButton = styled.button`
  border-radius: 10px;
  padding: 5px 5px;
  border: 0;
  background-color: pink;
  margin-right: 5px;
`;

const CommentUserName = styled.div`
  margin-right: 15px;
  color: gray;
  font-size: 15px;
`;
const Commentcontent = styled.div`
  margin-right: 15px;

  color: black;
  font-size: 15x;
`;
