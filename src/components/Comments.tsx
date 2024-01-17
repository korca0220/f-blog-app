import React, { useState } from "react";

const COMMENTS = [
  {
    id: 1,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 3,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 4,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 5,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
  {
    id: 6,
    email: "test@test.com",
    content: "댓글입니다.",
    createdAt: "2024-01-15",
  },
];

export default function Comments() {
  const [comment, setComment] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  return (
    <div className="comments">
      <form className="comments__form">
        <div className="form__block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="comment"
            required
            value={comment}
            onChange={onChange}
          />
        </div>
        <div className="form__block form__block-reverse">
          <input
            type="submit"
            value="입력"
            className="form__btn-submit"
          ></input>
        </div>
      </form>
      <div className="comment__list">
        {COMMENTS.map((comment) => (
          <div key={comment.id} className="comment__box">
            <div className="comment__profile-box">
              <div className="comment__email">{comment.email}</div>
              <div className="comment__date">{comment.createdAt}</div>
              <div className="comment__delete">삭제</div>
            </div>
            <div className="comment__text">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
