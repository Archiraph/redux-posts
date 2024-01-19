import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get("https://redux-posts-rust.vercel.app/api/db.json/posts")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      });
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post("https://redux-posts-rust.vercel.app/api/db.json/posts", data)
      .then((res) => {
        dispatch({ type: ADD_POST, payload: data });
      });
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    return axios
      .put(
        `https://redux-posts-rust.vercel.app/api/db.json/posts/${data.id}`,
        data
      )
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: data });
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios
      .delete(`https://redux-posts-rust.vercel.app/api/db.json/posts/${postId}`)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: postId });
      });
  };
};

export const addPostLike = (data) => {
  return (dispatch) => {
    return axios
      .put(
        `https://redux-posts-rust.vercel.app/api/db.json/posts/${data.id}`,
        data
      )
      .then((res) => {
        dispatch({ type: ADD_POST_LIKE, payload: data });
      });
  };
};
