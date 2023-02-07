import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAllPosts ,getPostError,getPostStatus, fetchPosts } from './postSlice';
import PostsExcerpt from './PostsExcerpt';

import React from 'react';

const PostsList = () => {
  const dispatch =useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === 'idle') {
        dispatch(fetchPosts())
    }
}, [postStatus, dispatch])

  let content;
  if (postStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
      // Reorders and sorts posts based on time. So newest posts goes on top
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
      content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
