import { doc, getDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { PostProps } from "./PostList";

export default function PostDetail() {
  const [post, setPost] = useState<PostProps | null>(null);
  const { id } = useParams();

  const getPost = async (id: string) => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
  };

  const handleDelete = () => {
    console.log("delete");
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, [id]);

  return (
    <>
      <div className="post__detail">
        {post ? (
          <div className="post__box">
            <div className="post__title">{post?.title}</div>
            <div className="post__profile-box">
              <div className="post__profile" />
              <div className="post__author-name">{post?.email}</div>
              <div className="post__date">{post?.createAt}</div>
            </div>
            <div className="post__utils-box">
              <div
                role="presentation"
                className="post__delete"
                onClick={handleDelete}
              >
                삭제
              </div>
              <div className="post__edit">
                <Link to={`/posts/edit/1`}>수정</Link>
              </div>
            </div>

            <div className="post__text pst__text-pre-wrap">{post.content}</div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
