import React, { useEffect } from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector, useDispatch } from "react-redux";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";
import { getPosts } from "./actions/post.action";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => <Post post={post} key={index} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
