import React from 'react';
import Link from 'next/link';

const posts = [
  {id:1, name: 'Post 1', path: '/posts/1' },
  {id:2, name: 'Post 2', path: '/posts/2' },
  {id:3, name: 'Post 3', path: '/posts/3' },
  {id:4, name: 'Post 4', path: '/posts/4' },
];

function Posts() {
  return (
    <div className='posts'>
      <h1>Post List</h1>
      <ul>{/* Render a list of Links from the posts object   */}
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.name}
          </Link>
        </li>
      ))}</ul>
    </div>
  );
}

export default Posts;
