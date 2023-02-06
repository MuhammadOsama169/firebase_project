import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthors';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

import React from 'react';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // Reorders and sorts posts based on time. So newest posts goes on top
  const orderPosts=posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
