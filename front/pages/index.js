import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_USER_REQUEST } from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            // data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div
        ref={hasMorePosts && !loadPostsLoading ? ref : undefined}
        style={{ height: 10 }}
      />
    </AppLayout>
  );
};

export default Home;
